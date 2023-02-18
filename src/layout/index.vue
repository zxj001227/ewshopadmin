<template>
<!--页面侧边栏-->
    <n-layout has-sider position="absolute">
      <n-layout-sider content-style="background-color:#001529" class=" h-screen ">
        <!--侧边导航栏组件-->
        <page-sider></page-sider>
      </n-layout-sider>
    <n-layout>
<!--页面头部-->
      <n-layout-header>
        <!--页面头部组件-->
        <PageHeader></PageHeader>
      </n-layout-header>
<!--页面内容-->
      <n-layout-content content-style="padding: 0px;background-color:#f0f2f5">
        <div class="content">
          <router-view></router-view>
        </div>
      </n-layout-content>
<!--页面底部-->
      <n-layout-footer>
        <div class="text-center">
          <span>Copyright © 2022</span>
        </div>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup>
  import PageHeader from "./components/PageHeader.vue";
  import PageSider from "./components/PageSider.vue";
  import {useMessage} from "naive-ui";

  window.$message = useMessage();
</script>

<style scoped>
.content {
  max-height: calc(100vh - 130px);
  height: calc(100vh - 130px);
}
</style>