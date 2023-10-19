<template>
  <Header />

  <main class="min-h-screen">
    <div class="container">
      <div class="p-5">
        <button
          :class="
            !toggle
              ? 'bg-green-700 px-3 py-2 hover:bg-green-600'
              : 'bg-red-700 px-3 py-2 hover:bg-green-600'
          "
          @click="toggle = !toggle"
        >
          {{ !toggle ? "SHOW" : "HIDE" }}
        </button>
      </div>

      <div class="p-5" v-if="toggle">
        <div class="p-8 shadow border">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            itaque numquam voluptatibus optio dolore nemo provident voluptatem
            ipsam velit consectetur, totam modi iste nulla delectus laboriosam
            maiores a non nisi officiis, quasi dolorum, cum accusamus. Dolorum
            velit assumenda alias voluptatum quod nisi odio fugiat optio quis
            nam ullam, obcaecati excepturi inventore voluptatem harum, rem
            doloremque? Consequatur provident hic nam maiores explicabo, sint
            ex, exercitationem libero, odit harum quibusdam incidunt obcaecati
            iste fugiat iure. Similique ab laborum distinctio, dolore natus
            pariatur atque. A eius nostrum ipsa quaerat? Ab dignissimos et
            mollitia rerum natus praesentium illo est? Nostrum minima, pariatur
            explicabo facere aspernatur natus sapiente nihil numquam magni
            incidunt illum laborum alias? Enim pariatur dolore maiores
            consectetur nobis id, voluptatem corporis quo.
          </p>
        </div>
      </div>

      <div v-else class="p-5">
        <h1 class="text-red-600">HIDDEN !</h1>
      </div>
    </div>

    <div class="p-5">

      <h1 v-if="loading" class="text-center">LOADING ....</h1>
      
      <div v-else>
        <PostItem v-for="el in posts" :data="el" txt="Hello Vue.app" :get="getPost" />
      </div>

    </div>
  </main>

  <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import PostItem from "./components/UI/PostItem.vue";

const toggle = ref(false);
const posts = ref([]);
const loading = ref(true);

const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await response.json();
  posts.value = res;
  loading.value = false;
  console.log("before mounted");
};

const filteredTitle = computed(() => {
  return posts.value.filter((item) => item.title == "nesciunt quas odio");
});

onMounted(() => {
  getPost();
});
</script>
