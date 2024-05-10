<template>
    <input type="tel" v-model="internalValue" placeholder="Enter phone number"
        class="w-full p-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
   
    <div>{{ internalValue }}</div>
</template>

<script setup>
import { ref } from 'vue';

const internalValue = ref('');
</script>
