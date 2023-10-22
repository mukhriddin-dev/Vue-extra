<template>
  <div>
    <h1>About</h1>
    <h2>{{ count }}</h2>
    <h3>{{ doubleCount }}</h3>
    <button @click="increment" class="p-4 border">++</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../store/useCouterStore";

const state = useCounterStore();

const { count, name, doubleCount } = storeToRefs(state);
const { increment } = state;
</script>

<style lang="scss" scoped></style>
