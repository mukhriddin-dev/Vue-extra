<template>
    <aside class="bg-indigo-400 p-3 w-[20%] min-h-screen">  

        <ul>
            <li v-for="(el, ind) in routing"    >
               <router-link :key="ind" class="p-3 capitalize block bg-indigo-600 my-2 rounded-md text-white hover:bg-indigo-700 cursor-pointer" :to="el.path"> {{el.title}} </router-link>
            </li>
        </ul>

    </aside>
</template>

<script setup>
import { ref , onMounted } from "vue";
import { routes } from "../../router";
const routing = ref([]);
onMounted(() => {
   routing.value=routes.map((item) => ({ path: item.path, title: item.name}))
})


</script>

<style lang="scss" scoped>
.router-link-exact-active{
    background-color: #10020275;
    color:#ffffff;
}
</style>