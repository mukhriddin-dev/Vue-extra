<template>
  <Header />
  <main class="min-h-screen">
    <div class="flex">
      <Sidebar />
      <section
        id="routing"
        class="grow m-2 p-4 border-2 rounded-md border-dashed"
      >
        <router-view></router-view>
      </section>
    </div>
  </main>
  <Footer ref="compoREF" />
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import Header from "@cmp/Header/Header.vue";
import Footer from "@cmp/Footer/Footer.vue";
import Sidebar from "@cmp/Sidebar/Sidebar.vue";

const router = useRouter();

onMounted(() => {
  // router.push({ name: "home" })
})


</script>

<style lang="scss" scoped></style>
