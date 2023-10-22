<template>
  <aside class="bg-indigo-400 p-3 w-[20%] min-h-screen">
    <div>
      
        <router-link
           v-for="(el, ind) in routing"
          :key="ind"
          class="p-3 capitalize  flex items-center gap-x-4 bg-indigo-200 my-2 rounded-md text-white hover:bg-indigo-700 cursor-pointer"
          :to="el.path"
        >
          <i :class="el.icon + ` text-2xl`"></i>
          <span>{{ el.title }}</span>
        </router-link>
      
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { routes } from "../../router";
const routing = ref([]);
onMounted(() => {
  routing.value = routes.map((item) => ({
    path: item.path,
    title: item.name,
    icon: item.icon
  }));
});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: #10020275;
  color: #ffffff;
}
</style>
