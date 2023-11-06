# Welcome

> ### 内网服务欢迎页面
>
> [主地址(内网)](https://cloud.nbtca.space/)
>
> ```
> https://cloud.nbtca.space/
> ```

## 源码说明

- 根目录为欢迎页面的源码目录
  - 使用 [vue3](https://vuejs.org/) + [ionic7](https://ionicframework.com/) 开发
  - 使用 TypeScript
- 具体的文件服务见下方说明

## 参与指南（对于社内成员）

1. 注册 GitHub 账户，联系并加入组织
2. 安装 [git](https://git-scm.com/) 和 [nodejs](https://nodejs.org/)，版本无特别要求
3. 克隆本仓库到本地
4. 进入本仓库目录，执行 `npm install` 安装依赖
5. 使用 [vscode](https://code.visualstudio.com/) 进行打开当前目录 ([内网下载](https://cloud.nbtca.space/Library/Software/Windows/Coding/VSCode))
6. 执行 `npm run dev` 启动开发服务器，时时预览编辑效果

PS. `git`命令不会用？推荐使用[GitHub Desktop](https://desktop.github.com/)，图形化界面操作更加友好（[内网下载](https://cloud.nbtca.space/Library/Software/Windows/Coding/GitHubDesktopSetup-x64.exe)）

## 架构/配置

- 系统使用 [iStoreOS - OpenWrt](https://www.istoreos.com/)
- 文件服务后端使用 [alist](https://github.com/alist-org/alist)
- webserver 服务使用 [nginx](https://openwrt.org/docs/guide-user/services/webserver/nginx)
  - nginx 配置文件在[config/nginx](config/nginx/)目录
- 测速后端使用 [homebox](https://github.com/XGHeaven/homebox/tree/master)

## 图骗

![效果](img/home.png)
![文件中心](img/files.png)
