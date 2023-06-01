---
title: docker内的容器走clash代理
date: 2023-05-06
tags:
  - docker
  - proxy
---

解决如何让docker容器的请求代理到clash。

---

## 容器内搭建clash

首先使用docker-compose.yml在docker内搭建一个`clash`容器：

```yml
version: '3.9'
services:
  clash:
    image: dreamacro/clash
    container_name: clash
    restart: always
    ports:
      - 7890:7890
      - 7891:7891
      - 9090:9090
    volumes:
      # 将配置文件挂载到容器中
      - ./clash:/root/.config/clash
```

然后在docker-compose.yml文件所在的目录下，执行命令：

```
docker-compose up -d
```

这样就简单搭建起来了一个代理服务器，clash的配置文件从./clash文件夹中读取，clash相关的教程这里就不提供啦。

## 搭建一个测试联通的容器

确认clash可以代理本机的http请求之后呢，我们在docker中另外开一个容器，随便开一个，然后我们设置这个容器的http流量代理到clash容器中

改写docker-compose.yml文件，改为以下的内容：

```yml
version: '3.9'
services:
  clash:
    image: dreamacro/clash
    container_name: clash
    restart: always
    ports:
      - 7890:7890
      - 7891:7891
      - 9090:9090
    volumes:
      # 将配置文件挂载到容器中
      - ./clash:/root/.config/clash
  yacd:
    image: ghcr.io/haishanh/yacd:master
    container_name: yacd
    restart: always
    depends_on:
      # 依赖于上面的clash服务，在clash启动后，web才启动
      - clash
    environment:
      # 注意这里，这里会代理终端的http流量到clash容器的7890端口
      - http_proxy=http://clash:7890
      - https_proxy=http://clash:7890
```

## 测试


之后我们只需要进入yacd容器中，在shell下使用命令测试能否访问google：

```
curl -Iv www.google.com
```

如果显示一下的信息，则说明终端的代理设置成功：

![image](/assets/img/curl_google.jpg)





