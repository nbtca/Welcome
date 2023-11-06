<template>
  <ion-datetime v-on:ion-change="onChange($event)" :day-values="day_list" presentation="date"
    :value="date"></ion-datetime>
  <p>当前选择日期：{{ date }}</p>
  <p>当日事件:</p>
  <ol>
    <li v-for="event in day_event_list" :key="event.summary">
      <p>{{ event.summary }}</p>
      <p>{{ event.description }}</p>
      <p>{{ event.date.toLocaleString() }}</p>
    </li>
  </ol>
  <div style="overflow: auto">
    <n-config-provider :theme="darkTheme">
      <n-timeline>
        <n-timeline-item :color="event.type" :title="event.summary" :content="event.description"
          :time="event.date.toLocaleString()" v-for="event in event_list">
        </n-timeline-item>
      </n-timeline>
    </n-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { IonDatetime } from "@ionic/vue";
import axios from "axios";
import { NConfigProvider, darkTheme, NTimeline, NTimelineItem } from "naive-ui";
import ICAL from "ical";
import moment from "moment";
const ical_url = "http://127.0.0.1:12345/ical";

enum Event_type {
  Birthday = "#ff3b30",
  RepairDay = "yellow",
  Meeting = "#34c759",
  Other = "#007aff"
}

type Event = {
  summary: string;
  description?: string;
  date: Date;
  type: Event_type;
};
var event_list = ref([] as Event[]);
var day_event_list = ref([] as Event[]);
var day_list = ref("");
const compareEvent = (a: Event, b: Event) => {
  const timeA = a.date.getTime();
  const timeB = b.date.getTime();
  if (timeA > timeB) {
    return -1;
  }
  if (timeA < timeB) {
    return 1;
  }
  return 0;
};

const date = ref<string>(moment("2023-10-30").format("YYYY-MM-DD"));


const getDayEventList = () => {
  day_event_list.value = [];
  var day = [];
  var month = new Date(date.value).getMonth() + 1;
  for (var event of event_list.value) {
    if (event.date.getMonth() + 1 == month) {
      day.push(event.date.getDate())
    }
    if (moment(event.date).format("YYYY-MM-DD") == date.value) {
      day_event_list.value.push(event);
    }
  }
  day_list.value = Array.from(new Set(day)).join(",");
  console.log(day_list.value)
};
const onChange = (e: any) => {
  console.log("change")
  date.value = e.detail.value;
  getDayEventList();
};
axios.get(ical_url).then((res) => {
  var ical_data = ICAL.parseICS(res.data);
  console.log(ical_data)
  var e_list: Event[] = [];
  for (var event of Object.values(ical_data)) {
    var e: Event = {
      summary: event.summary || "无事件",
      description: event.description,
      date: event.start || new Date("1970-01-01"),
      type: Event_type.Other
    }
    if (e.summary.indexOf("生日") != -1) {
      e.type = Event_type.Birthday;
    } else if (e.summary.indexOf("维修") != -1) {
      e.type = Event_type.RepairDay;
    }
    else if (e.summary.indexOf("会") != -1) {
      e.type = Event_type.Meeting;
    }
    e_list.push(e);
  }
  e_list.sort(compareEvent);
  event_list.value = e_list;
  getDayEventList();
});
</script>
