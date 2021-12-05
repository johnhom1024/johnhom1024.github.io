# 网址大全

<NavigationList-index :list="list" />

<script>
export default {
  setup() {
    const list = [
      {
        title: '电影网站',
        children: [
          {
            name: '蛋蛋赞',
            link: 'https://www.twoeggz.com/'
          },
          {
            name: '低端影视',
            link: 'https://ddrk.me/'
          },
          {
            name: '蛋蛋赞',
            link: 'https://www.twoeggz.com/'
          },
        ],
      },
      {
        title: '动漫网站',
        children: [
          {
            name: 'AGE动漫',
            link: 'https://www.agefans.vip/'
          },
          {
            name: 'M站',
            link: 'http://bimiacg2.net/',
          }
        ]
      },
      {
        title: '博客',
        children: [
          {
            name: 'limbopro',
            link: 'https://limbopro.com/',
          },
          {
            name: 'Sabrina的万事屋',
            link: 'https://merlinblog.xyz/'
          },
          {
            name: 'MyFreeMP3',
            link: 'http://tool.liumingye.cn/music'
          }
        ]
      },
      {
        title: '社区网站',
        children: [
          {
            name: 'IT邦邦忙',
            link: 'https://ithelp.ithome.com.tw/'
          },
          {
            name: 'Broker.io',
            link: 'https://bbs.iobroker.cn/'
          }
        ]
      },
      {
        title: '工具类网站',
        children: [
          {
            name: '创业团队容器化办公',
            link: 'https://startups.mytrade.fun'
          },
          {
            name: 'RunKit',
            link: 'https://runkit.com/home'
          },
          {
            name: 'HACK学习-安全导航',
            link: 'https://index.tesla-space.com/'
          },
          {
            name: 'MacWk-精品Mac软件',
            link: 'https://macwk.com/'
          },
          {
            name: 'IPAddress',
            link: 'https://www.ipaddress.com/'
          }
        ]
      },
      {
        title: '高科技',
        children: [
          {
            name: 'Catnet',
            link: 'https://dash.catnet.uk/#/login'
          }
        ]
      },
      {
        title: '硬件科普',
        children: [
          {
            name: '显示器吧',
            link: 'https://www.xianshiqiba.com/'
          },
          {
            name: '装备前线',
            link: 'https://www.zfrontier.com/'
          }
        ]
      }
    ]
    
    return {
      list
    }
  }
}
</script>
