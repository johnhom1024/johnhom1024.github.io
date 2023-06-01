---
title: macOS的终端设置
date: 2023-05-26
tag:
  - macOS
  - terminal
---


# macOS的终端设置

## Oh My Zsh

官网网址：[https://ohmyz.sh/](https://ohmyz.sh/)

## iTerm2的配置使用

用于代替macOS的终端软件

安装网址：[iTerm2](https://iterm2.com/)

### status bar

status bar就是一下图示的红色区域：

![image](/assets/img/terminal-01.jpg)

如果需要使用呢，请按照以下的图示开启status bar：

![image](/assets/img/terminal-02.jpg)


## 使用命令打开VSCode

首先打开VSCode，然后使用快捷键Shift+Command+P，调起命令窗口，输入shell Command，下方出现Install 'code' command in PATH选项，点击以安装。

![image](/assets/img/terminal-03.png)

### 使用步骤：

打开命令行，进入工作目录，然后如果要用vscode打开某个文件夹，直接输入vscode + . 即可。


## link

软链接的作用就是生成一个目标文件或者目录，这个文件或者目录指向源文件或者目录。

语法

```
ln -s [源文件或目录] [目标文件或目录]
```

在某个场景下，我想通过终端，用VSCode打开某个文件夹，步骤是如下：

1. 打开终端
2. 一层一层进入到对应的文件夹内。
3. 输入code + .命令，之后就会启动VSCode打开文件夹。

如果文件夹所在的层次较多，又无法移动，我们可以使用`link`命令，通过软链接的方式，将该文件夹软链接到用户的根目录下。

执行的软连接的命令如下：

```
ln -s /Volumes/Backup/fk ~/
```

这样就会在当前的用户目录下创建一个`fk`的文件夹，这个文件夹会指向`/Volumes/Backup/fk`，之后我只需要在终端直接`cd ~/fk`，即可执行`code`命令打开文件夹。

## 终端设置代理翻墙

想要在命令行安装oh-my-zsh，最后发现终端访问github失败，但是浏览器缺可以访问，这可能是因为终端并没有走代理。

下面我们来配置终端走代理。

### 改写shell配置文件

把代理服务器地址写入 shell 配置文件`.bashrc`或者`.zshrc`，在shell配置文件添加下面内容：

```shell
# 配置终端走代理模式
function proxy_on() {
  export https_proxy=http://localhost:port
  export http_proxy=http://localhost:port
  export all_proxy=socks5://localhost:port
}
# 关闭代理
function proxy_off() {
  unset https_proxy
  unset http_proxy
  unset all_proxy
  echo -e "已关闭代理"
}

# 执行proxy_on
proxy_on
```

首先我们要知道代理本地端口号，以ClashX为例，http和https的代理端口为7890，socks的代理端口为7891，那么我们应该对shell的配置文件（.bashrc或者.zshrc）的末尾行添加以下内容：

```shell
# 配置终端走代理模式
function proxy_on() {
  export https_proxy=http://localhost:7890
  export http_proxy=http://localhost:7890
  export all_proxy=socks5://localhost:7891
}
# 关闭代理
function proxy_off() {
  unset https_proxy
  unset http_proxy
  unset all_proxy
  echo -e "已关闭代理"
}

# 执行proxy_on
proxy_on
```

然后我们重启终端即可生效。如果不想重启终端，而是想在当前的终端生效，我们只需要执行命令：

```shell
source ~/.zshrc

## .zshrc可以替换成上一步中修改的配置文件比如.bashrc
```

最后测试是否翻墙成功，我们使用curl命令请求一下google网址：

```
curl -I https://www.google.com
```

`-I`参数代表向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来。

```
➜  ~ curl -I https://www.google.com

HTTP/1.1 200 Connection established

HTTP/2 200 
content-type: text/html; charset=ISO-8859-1
p3p: CP="This is not a P3P policy! See g.co/p3phelp for more info."
date: Sat, 18 Dec 2021 07:07:43 GMT
server: gws
x-xss-protection: 0
x-frame-options: SAMEORIGIN
expires: Sat, 18 Dec 2021 07:07:43 GMT
cache-control: private
set-cookie: 1P_JAR=2021-12-18-07; expires=Mon, 17-Jan-2022 07:07:43 GMT; path=/; domain=.google.com; Secure
set-cookie: NID=511=ne5-MBMfwxq2a6ZyCdRAZ_zU-YjjksqtQ0OTNyRVPTWq1vnDpKTA0a2oDCeDLrbbDixP--aQ6H-ufrL-Zoj8HDkJpAOjkriQysg5OmPfViBCc7aknFCw_NBIlXffS8y0KwnAX3FBnqdUu1IiuQrT_t7gVOqOTqLmGKqxt6MZohU; expires=Sun, 19-Jun-2022 07:07:43 GMT; path=/; domain=.google.com; HttpOnly
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"
```

看到如下的输出，说明终端已经阔以访问外网啦。

如果想要终端不使用代理，那么我们直接在终端输入以下命令即可：

```shell
➜  ~ proxy_off
已关闭代理
```