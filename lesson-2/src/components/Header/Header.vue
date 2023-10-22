<template>
  <header class="bg-indigo-700">
    <div class="mx-auto">
      <nav class="p-4 flex justify-between">
        <a href="#" class="text-white text-2xl font-medium"> LOGO </a>

        <button
          class="px-4 py-2 bg-indigo-900 focus:ring-2 text-white hover:bg-indigo-400"
          @click="logout"
        >
          CHIQISH
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const navigate = useRouter();

const logout = () => {
  navigate.push({ name: "login" });
  localStorage.clear();
  toast.info("SUCCESS");
  console.log("logged");
};
</script>

<style lang="scss" scoped></style>
