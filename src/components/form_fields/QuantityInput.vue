<template>
    <h4 class="mb-3 text-lg font-medium">Количество</h4>
    <div class="flex self-center">
        <button @click="updateQuantity(false)" :disabled="qnt <= 1"
            class="p-2 bg-gray-300 text-gray-800 disabled:bg-gray-200 rounded-l-lg h-12 w-12" type="button">
            <svg class="w-6 h-6 text-gray-800 dark:text-white mx-auto" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14" />
            </svg>
        </button>
        <input type="tel" v-model="qnt" readonly
            class="p-1 text-4xl text-center border-t border-b border-stone-200 bg-white focus:outline-none h-12 w-12" />
        <button @click="updateQuantity(true)" :disabled="qnt >= 4" class="rounded-r-lg p-2 bg-gray-300
              text-gray-800 disabled:bg-gray-200 h-12 w-12" type="button">
            <svg class="w-6 h-6 text-gray-800 dark:text-white mx-auto" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14m-7 7V5" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['update:qnt']);
const qnt = ref(1);

function updateQuantity(increment) {
    const newQuantity = qnt.value + (increment ? 1 : -1);
    if (newQuantity >= 1 && newQuantity <= 4) {
        qnt.value = newQuantity;
        // If you need to emit the new quantity to a parent component:
        emit('update:qnt', newQuantity);
    }
}
</script>

<style scoped>

</style>