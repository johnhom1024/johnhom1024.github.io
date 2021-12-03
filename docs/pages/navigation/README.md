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
            name: 'Sabrina的万事屋',
            link: 'https://merlinblog.xyz/'
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
