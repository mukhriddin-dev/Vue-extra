<template>
  <div class="p-2">
   

    <button
      @click="toggle"
      class="bg-indigo-500 px-4 m-3 py-2 rounded-md text-white"
    >
      Toggle
    </button>

    <div ref="cardRef" class="card p-4 border shadow-lg m-3 w-[600px]">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta
        molestias explicabo dolorum voluptate nesciunt iure laudantium non
        corrupti officiis in culpa fugit, minima inventore similique perferendis
        aspernatur odit. Illo enim eligendi consectetur laboriosam optio veniam
        earum? Itaque veritatis perspiciatis explicabo facilis vitae voluptate
        repellat. Nam, praesentium. Eius unde non beatae quia, est minus fugit
        deserunt sequi voluptatibus quaerat, cum quos quis qui laboriosam nulla
        nobis vero nesciunt odit amet. Quia excepturi natus officiis
        perspiciatis illum molestias dolorum tenetur sunt! Quibusdam unde
        laudantium totam libero fuga nam obcaecati delectus assumenda sint vero
        alias consectetur aliquam, doloremque, modi quam dolorem deleniti.
      </p>
    </div>

    <input
      v-model="setText"
      type="text"
      class="m-3 p-3 w-[600px] border"
      placeholder="Enter smth text"
    />

    

    <!-- <Extra :text="text" @send-str="recivedStr" /> -->
  </div>
</template>

<script setup>
// import { ref, onMounted, defineEmits } from "vue";
// import Extra from "../../components/Extra.vue";
// const cardRef = ref(null);
// const inputRef = ref(null);

// const setText = ref("");
// const text = "Hello child";

// const emit = defineEmits();

// const recivedStr = (text) => {
//   emit("followme", text);
// };

// onMounted(() => {
//   console.log(cardRef.value);
// });

// const toggle = () => {
//   cardRef.value.classList.toggle("hidden");
// };

// const getValue = (e) => {
//   console.log(inputRef.value?.value);
//   // setText.value =e.target.value;
// };
</script>

<style lang="scss" scoped></style>
