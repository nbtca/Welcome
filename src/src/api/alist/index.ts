/**
 {
    "code": 200,
    "message": "success",
    "data": {
        "content": [
            {
                "name": "ISO",
                "size": 0,
                "is_dir": true,
                "modified": "2023-09-16T15:10:02.4274101Z",
                "sign": "",
                "thumb": "",
                "type": 1
            },
            {
                "name": "test.txt",
                "size": 518274,
                "is_dir": false,
                "modified": "2023-02-27T11:03:55.0982536Z",
                "sign": "",
                "thumb": "",
                "type": 4
            }
        ],
        "total": 2,
        "readme": "",
        "write": false,
        "provider": "SMB"
    }
}
 */

import axios from "axios";

export interface FileItemData {
  content: FileItem[];
  total: number;
  readme: string;
  write: boolean;
  provider: string;
}

export interface FileItem {
  name: string;
  size: number;
  is_dir: boolean;
  modified: string;
  sign: string;
  thumb: string;
  type: number;
}
export interface FileResult {
  code: number;
  message: string;
  data: FileItemData | null;
}
export async function listFiles() {
  return (await axios.get("/api/fs/list")).data as FileResult;
}
