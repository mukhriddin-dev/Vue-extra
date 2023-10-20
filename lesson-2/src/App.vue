<template>
 <Header />
 <main class="min-h-screen">
   <div class="flex">
    <Sidebar/>
    <section id="routing" class="grow m-2 p-4 border-2  rounded-md border-dashed">
   
     <router-view></router-view>
    
    </section>
   </div>
 </main>
 <Footer ref="compoREF"/>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Header from "@cmp/Header/Header.vue"
import Footer from "@cmp/Footer/Footer.vue";
import Sidebar from "@cmp/Sidebar/Sidebar.vue";
import Home from "@pg/Home/Home.vue";


const compoREF = ref(null);
const resdata = ref([]);

const followed = (data) => {
  resdata.value = data;
}

onMounted(() => {
  console.log(compoREF.value)
})

</script>


<style lang="scss">
  
</style>