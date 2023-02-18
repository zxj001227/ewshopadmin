<template>
  <div class="pt-4">
    <div class="m-0">
      <img style="margin:auto" src="@/assets/images/logo.png" alt="logo">
    </div>
    <n-menu :options="menuOptions"  :value="defaultKey" inverted @update:value="handleUpdateValue" />
  </div>
</template>

<script lang="ts" setup>
    import { ref,onMounted,h, Component } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import {routeModuleList}  from "@/router";
    import {generatorMenu} from "@/utils"; //导入utils/index.ts的generatorMenu方法 侧边菜单格式


    const defaultKey = ref("");

    onMounted(()=>{
      const route = useRoute();
      // 获取当前路由的key
      const routeKey = route.name;
      if (typeof routeKey === "string") {
        defaultKey.value = routeKey;
      }
    });
    const router = useRouter();
    //把菜单路由列表用menuOptions 存起来 在渲染到页面上
    const menuOptions = generatorMenu(routeModuleList); //routeModuleList就是router/index.ts里边的子级路由列表
    //点击哪个跳转哪个对应的路由 key是路由 item是路由对应的每一项的menuOptions的格式
    const handleUpdateValue=(key,item) =>{
      console.log(key,item);
      defaultKey.value = key;
      //点击跳转到对应的路由
      router.push({name:key});
    };

</script>

<style scoped>

</style>