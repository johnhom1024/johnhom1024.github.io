---
title: M1芯片Mac安装Node.js
date: 2023-05-26
author: Johnhom
tags:
  - Node.js
  - mac
---

>记录M1芯片Mac如何安装Node.js

---



## M1芯片Mac安装Node.js

首先注意，支持arm架构的Node.js的版本为V16以上，因此我们只需要通过nvm工具安装最新的Node.js即可

## M1芯片无法安装node-sass版本的问题

如果遇到以下的问题：

![image](/assets/img/NodeJS-01.jpg)

我们可以首先检查Node版本。

首先查看自己的node版本是否和项目中所使用的node-sass版本对应，如下表：

![image](/assets/img/NodeJS-02.jpg)

如果想要安装NodeJS的v15.X或者v14.X版本，我们需要切换当前的终端为x86_64架构模式：

```shell
arch -x86_64 zsh
```

之后就可以安装旧版本的NodeJS：

```
nvm i v15
```

安装完成之后，再切回arm64架构

```
arch -arm64 zsh
```