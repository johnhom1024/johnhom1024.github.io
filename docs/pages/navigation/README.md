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
            name: 'AGE动漫',
            link: 'https://www.agefans.vip/'
          },
          {
            name: '蛋蛋赞',
            link: 'https://www.twoeggz.com/'
          },
        ]
      }
    ]
    
    return {
      list
    }
  }
}
</script>