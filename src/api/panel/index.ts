import { Axios } from "axios";
/**
 * 接口位置
 */
const api = new Axios({
  baseURL: "/panel",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  transformResponse: (data) => {
    if (typeof data === "string") return JSON.parse(data);
    return data;
  },
  timeout: 1000,
});
/**
 * 单个磁盘信息
 */
export interface DiskInfo {
  /**
   * 空闲空间
   */
  available_free_space: number;
  /**
   * 格式
   */
  format: string;
  /**
   * 卷标
   */
  label_name: string;
  /**
   * 总空闲空间
   */
  total_free_space: number;
  /**
   * 总大小
   */
  total_size: number;
}
export async function GetDisk() {
  return (await api.get("/disk")).data as DiskInfo[];
}

export interface MemoryInfo {
  /**
   * 空闲Windows页内存大小
   */
  avail_page_file: number;
  /**
   * 总Windows页内存大小
   */
  total_page_file: number;
  /**
   * 空闲物理内存大小
   */
  avail_phys: number;
  /**
   * 负载百分比 [0,100] 数值
   */
  memory_load: number;
  /**
   * 总物理内存大小
   */
  total_phys: number;
  /**
   * 空闲虚拟内存大小
   */
  avail_virtual: number;
  /**
   * 总虚拟内存大小
   */
  total_virtual: number;
}
export async function GetMemory() {
  return (await api.get("/memory")).data as MemoryInfo;
}
/**
 * 单个网络适配器信息
 */
export interface NetworkInfo {
  /**
   * 名称
   */
  name: string;
  /**
   * 接收到的总数据量，好像是字节数
   */
  total_received: number;
  /**
   * 发送的总数据量
   */
  total_transmitted: number;
}
export async function GetNetwork() {
  return (await api.get("/network")).data as NetworkInfo[];
}
/**
 * 单个CPU的占用
 */
export interface CPUInfo {
  /**
   * CPU使用率
   */
  cpu_usage: number;
  /**
   * CPU频率
   */
  frequency: number;
  /**
   * CPU型号
   */
  brand: string;
  /**
   * CPU名称
   */
  name: string;
  /**
   * CPU制造商名称
   */
  vendor_id: string;
}
export async function GetCPU() {
  return (await api.get("/cpu")).data as CPUInfo[];
}
/**
 * 获取日历
 */
export async function GetCalendar() {
  return (await api.get("/ical")).data as string;
}
