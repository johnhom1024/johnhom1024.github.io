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
          }
        ]
      },
      {
        title: '社区网站',
        children: [
          {
            name: 'IT邦邦忙',
            link: 'https://ithelp.ithome.com.tw/'
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
      }
    ]
    
    return {
      list
    }
  }
}
</script>
