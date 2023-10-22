<template>
  <div>
    <h1>Employees</h1>

    <div v-if="loading" class="mx-auto w-[200px] p-5 bg-green-500">
      <h1 class="text-center">LOADING . . .</h1>
    </div>

    <div v-else-if="errorMessage" class="mx-auto w-[200px] p-5 bg-green-500">
      <h1 class="text-center">NOT FOUND</h1>
    </div>

    <ul v-else>
      <li
        v-for="el in products"
        class="p-4 my-3 border-4 border-dotted bg-indigo-200"
      >
        <router-link :to="`/employees/${el.id}`">
          {{ el.title }}
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useProductApi from "@api/products";

const products = ref([]);
const loading = ref(true);
const errorMessage = ref(false);

onMounted(() => {
  useProductApi
    .getAll()
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        products.value = res.data;
        loading.value=false;
      }
    })
    .catch((err) => {
      console.log(err);
      errorMessage.value = true;
      loading.false;
    });
});
</script>

<style lang="scss" scoped></style>
