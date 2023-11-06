<template>
  <ion-datetime :on-ion-change="onChange" presentation="date" :value="date"></ion-datetime>
  <div style="overflow: auto">
    <n-config-provider :theme="darkTheme">
      <n-timeline>
        <n-timeline-item type="info" :title="event.summary" :content="event.description" :time="event.date"
          v-for="event in event_list">
        </n-timeline-item>
      </n-timeline>
    </n-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { IonDatetime } from "@ionic/vue";
import axios from "axios";
import { NConfigProvider, darkTheme, NTimeline, NTimelineItem } from "naive-ui";

import ICAL from "ical.js/build/ical.js";

const ical_url = "http://127.0.0.1:12345/ical"

type Event = {
  summary?: string;
  description?: string;
  date?: string;
};
var event_list = ref([] as Event[]);

const compareEvent = (a, b) => {
  const timeA = new Date(a.date).getTime();
  const timeB = new Date(b.date).getTime();

  if (timeA < timeB) {
    return -1;
  }
  if (timeA > timeB) {
    return 1;
  }
  return 0;
}

axios.get(ical_url).then((res) => {
  var ical_data = ICAL.parse(res.data);
  var ical_list = ical_data[2]
  var e_list: Event[] = []
  for (var event of ical_list) {
    var list = event[1]
    var e: Event = {}
    for (var item of list as any) {
      if (item[0] == 'summary') {
        e.summary = item[3]
      }
      else if (item[0] == 'description') {
        e.description = item[3]
      }
      else if (item[0] == 'dtstart') {
        e.date = item[3]
      }
    }
    e_list.push(e)
  }
  e_list.sort(compareEvent)
  event_list.value = e_list
});


const date = ref<string>("2023-02-01");

const onChange = () => {
};


</script>
