<template>
    <label for="phone" class="font-medium flex mb-1">Напишите телефон</label>
    <input v-phone id="phone" type="tel" :value="phone" @change="onInput" placeholder="+7 (___) ___-__-__"
        class="w-full border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg p-2">
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  phone: String
});
const emit = defineEmits(['update:phone']);

function onInput(event) {
    emit('update:phone', event.target.value);
}
</script>
<style>
/* Общие стили для поля ввода */
input[type="tel"] {
    transition: border-color 0.2s;
    outline: none;
}

/* Стили для валидного состояния */
.is-valid,
.is-valid:focus {
    border-color: green;
}

/* Стили для невалидного состояния */
.is-invalid,
.is-invalid:focus {
    border-color: red;
}

/* Стили для состояния фокуса без валидации */
input[type="tel"]:focus:not(.is-valid):not(.is-invalid) {
    border-color: blue;
}
</style>