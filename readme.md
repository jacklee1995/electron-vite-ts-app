# elapp

[中文](https://github.com/jacklee1995/elapp/blob/elapp/readme.md "中文文档") | [English](https://github.com/jacklee1995/elapp/blob/elapp/readme.md "英文文档")

**Author**: Jack Lee (李俊才)

**Author Email**: [291148484@163.com](mailto:291148484@163.com)

**LICENSE**: [MIT](https://github.com/jacklee1995/electron-vite-ts-app/blob/master/LICENSE)

**GitHub**: https://github.com/jacklee1995/electron-vite-ts-app

# brief introduction

Elapp is an Electron desktop application framework developed by TypeScript language using Vite as a development and construction tool. The framework consists of project template, scaffolding and component library. Template is a basic elapp application, which is created and customized by @elapp/cli process.

# 项目结构

```tree
[elapp]
   ├─[process_main]                 # 主进程源代码
   │   ├─[src]
   │   │   ├─[apps]                 # 主进程应用集，管理对应的各个应用窗口
   │   │   │   ├─[App1]
   │   │   │   ├─[App2]
   │   │   │   └─...
   │   │   ├─[associations]         # 注册系统关联
   │   │   ├─[check]                # 应用初始化检查
   │   │   ├─[develop_tools]        # 开发化境用到的一些工具
   │   │   ├─[logger]               # 日志器
   │   │   ├─[sys]                  # 管理系统资源
   │   │   └─[window]               # 窗口管理相关
   │   └─[types]
   ├─[process_render]               # 渲染进程子项目集
   │   ├─[render_app_1]
   │   ├─[render_app_2]
   │   └─[nodetools]                # 一些 NodeJS 代码，主要用于渲染进程的构建工具，如 Vite
   ├─[public]                       # 渲染进程的静态公共资源文件
   ├─[VITE_ENVS]                    # Vite 所需的环境变量
   └─[build]                        # 构建项目
      ├─[assets]                    # 用于存放编译需要用到的资源，如图标
      ├─[release]                   # 用于存放各个发布版本编译后的文件
      │   ├─[v0.0.1]
      │   ├─[v0.0.2]
      │   └─...
      ├─[renders]                   # 构建后所有渲染进程子应用
      │   ├─[App1]
      │   ├─[App2]
      │   └─...
      ├─[sources]                  # 直接打包到安装包中的文件，将随着应用的安装写入应用的目录中
      │   ├─[chrome_extension]
      │   ├─[dll]
      │   └─[script]
      └─[src]                      # 编译的适用于 electron 的主进程 javascript 代码
         ├─[apps]
         │   ├─[Index]
         │   └─[Loading]
         ├─[associations]
         ├─[check]
         ├─[develop_tools]
         ├─[logger]
         ├─[sys]
         └─[window]
```

# Download

## Install from github

```
git clone https://github.com/jacklee1995/elapp.git
```

## Install from gitee

```
https://toscode.gitee.com/jacklee1995/electron-vite-ts-app.git
```

## Install project dependencies

### Install powershell 7.x (recommended, not required)

PowerShell-7.3.0 地址：

```
https://github.com/PowerShell/PowerShell/releases/download/v7.3.0/PowerShell-7.3.0-win-x64.msi
```

WIndows system, if not installed in, you need to manually replace the pwsh string in the command value as powershell.

## Install dependencies

```
pnpm install
```

# Get and install this template as init electron project

## Download from github or gitee

**Note**: You need to download and install a git tool from [https://git-scm.com/](https://git-scm.com/) first

use git hub

```
git clone https://github.com/jacklee1995/electron-vite-ts-app.git
```

or use gitee

```
git clone https://gitee.com/jacklee1995/electron-vite-ts-app.git
```

## Install Dependencies

```
pnpm inst
```

# Run App

## run render process dev serve only

```
pnpm run start
```

## Run app

```
pnpm run serve
```

# Build

## build vite only

```
pnpm run build:renders
```

## build installer

```
pnpm run build
```

# Informations

## Before use

If you have powershell v7.x.x installed, you can ignore this subsection. Otherwise, you need to replace all `pwsh` in the script field with `powershell` in `package.json` file.

## NODE_ENV

Npm has a default configuration item - `production`, and when it is set to true, the dependency packages under devDependencies will not be installed. This means that when the environment variable `NODE_ENV` is set in your system and its value is `production`, if you directly use the command `npm install`, some dependencies used in the development environment may not be installed.
