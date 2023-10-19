<template>
  <div class="px-4 py-3 border my-3 shadow-lg">
    {{ data.title }}
    {{ txt }}
  </div>
</template>

<script setup>
import { defineProps , onMounted } from "vue";

// const props = defineProps(['data','txt']);

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  txt: {
    type: String,
    required: false
  },
  get: {
    type: Function,
    required: true
  }
});


onMounted(() => {
    console.log(props)
})


</script>

<style lang="scss" scoped></style>
