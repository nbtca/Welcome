import { Axios } from "axios";
const api = new Axios({
  baseURL: "/panel",
});
export interface DiskInfo {
  available_free_space: number;
  format: string;
  label_name: string;
  total_free_space: number;
  total_size: number;
}
export async function GetDisk() {
  return (await api.get("/disk")) as DiskInfo[];
}
export interface MemoryInfo {
  avail_page_file: number;
  avail_phys: number;
  avail_virtual: number;
  memory_load: number;
  total_page_file: number;
  total_phys: number;
  total_virtual: number;
}
export async function GetMemory() {
  return (await api.get("/memory")) as MemoryInfo;
}
export interface NetworkInfo {
  name: string;
  total_received: number;
  total_transmitted: number;
}
export async function GetNetwork() {
  return (await api.get("/network")) as NetworkInfo[];
}
export interface CPUInfo {
  cpu_usage: number;
  frequency: number;
  brand: string;
  name: string;
  vendor_id: string;
}
export async function GetCPU() {
  return (await api.get("/cpu")) as CPUInfo[];
}
