<template>
  <div class="p-5 bg-indigo-200 mx-auto">
    <div class="flex justify-between items-center">
      <h1>Product item {{}}</h1>
      <button
        class="px-4 py-2 bg-indigo-900 focus:ring-2 text-white hover:bg-indigo-400"
        @click="router.back"
      >
        Go back
      </button>
    </div>

    <div class="p-5">
      <ul>
        <li>
          <strong>Name:</strong> <span> {{ product?.title }}</span>
        </li>
        <li>
          <strong>Description:</strong> <span> {{ product?.description }}</span>
        </li>

        <li class="flex gap-x-4 mt-4">
          <img
            class="w-[120px]"
            v-for="img in product?.images"
            :src="img"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useProdutsApi from "@api/products";
const router = useRouter();

let product = ref();

const {
  params: { id }
} = useRoute();

onMounted(() => {
  console.log(router);
  useProdutsApi
    .getOneItem(id)
    .then((res) => {
      console.log(res.data);
      product.value = { ...res.data };
    })
    .catch((err) => {
      console.log(err.message);
    });
});
</script>

<style lang="scss" scoped></style>
