<!--
 * @Date: 2021-12-02 22:44:29
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
-->
<template>
  <div class="col">
    <a
      :style="labelStyle"
      class="navigation-item"
      :href="link"
      target="_blank"
      >{{ name }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    link: String,
  },
  computed: {
    labelStyle() {
      const style = {
        "text-decoration": "none",
      };
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  width: 30%;
  padding: 0 15px;
  margin-top: 20px;
  .navigation-item {
    padding: 0 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    display: inline-block;
    white-space: nowrap;
    font-size: 15px;
    background-color: #f3f3f3;
    color: #444;
    transition: 0.3s;
    &:hover {
      background-color: var(--c-brand);
    }
  }
}
</style>
