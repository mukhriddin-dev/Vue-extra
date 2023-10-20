<template>
    <div class="border-2 border-indigo-600 p-16">
        <button class="px-4 py-2 bg-indigo-500" @click="sendStr">SEND</button>
     <p>{{ props.text }}</p>
     <slot/>
    </div>
    
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const str = ref("my Name is EMIT");

const props = defineProps(['text'])


const emit = defineEmits();


const sendStr = () => {

    emit('send-str', [{id:1, name:"emitjon"},{id:1, name:"emitjon"},{id:1, name:"emitjon"},{id:1, name:"emitjon"},{id:1, name:"emitjon"}])

   

}


</script>

<style lang="scss" scoped>

</style>