# 本地启动项目

在启动项目之前，你需要已经准备好了**开发环境**。这里作者使用最新版本的IDEA演示如何本地启动项目

### Clone & Open

首先把整个项目代码下载到本地：

```bash
git clone https://github.com/tycoding/langchat.git
```

使用IDEA打开整个`langchat`项目文件夹：

![](/open-langchat.png)

### 下载依赖

**前端**

切换到`langchat-ui`，需要用`pnpm`下载依赖

```bash
cd langchat-ui
pnpm install
```

**后端**

IDEA打开后会自动加载Maven依赖

### 环境配置

Clone下来的代码，首先你需要修改后端SpringBoot项目的配置文件才能运行。

#### 导入sql

你需要再MySQL8下创建一个名为`langchat`的数据库，然后在项目根目录找到`langchat.sql`脚本并导入表结构

![](/mysql.png)

#### 修改application.yml

注意，`application.yml`中默认配置`local`环境，你可以在本地创建`application-local.yml`文件，当然也可以修改为`dev`环境使用`application-dev.yml`中的配置。

![](/project.png)

`application-dev.yml`包含了最基础的环境配置要求：

1. 正常启动项目，必须配置好`mysql`、`redis`信息

### 启动后端项目

后端运行`LangChatApp.java`的main函数启动：

![](/run.png)

### 启动langchat-ui前端

前端基于Node，先安装依赖再启动项目，运行如下命令：

```shell
cd langchat-ui

pnpm install

pnpm run dev
```

启动后访问 `http://localhost:3003/` 跳转到后台系统登录页

![](/langchat-ui.png)

