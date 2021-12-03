<template>
  <div class="navigation-list" v-for="item in list" :key="item.title">
    <h5 class="category-title">
      {{ item.title }}
    </h5>
    <div class="flex flex-wrap row">
      <NavigationList-NavigationItem
        v-for="(web, index) in item.children"
        :key="index"
        :name="web.name"
        :link="web.link"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
.category-title {
  margin-bottom: 0;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
}
</style>
