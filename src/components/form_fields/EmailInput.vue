<template>
    <label for="bayerEmail" class="font-medium flex mb-1">Напишите Email:</label>
    <input type="email"
        class="w-full border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg p-2"
        id="bayerEmail" placeholder="info@mail.ru" :value="email" @change="onEmailInput">
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    email: String
});
const emit = defineEmits(['update:email']);

function onEmailInput(event) {
    emit('update:email', event.target.value);
}
</script>

<style scoped></style>