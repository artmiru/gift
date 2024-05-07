<template>
    <label for="phone" class="font-medium flex mb-1">{{ labelText }}</label>
    <input type="tel" name="phone" id="phone" v-model="phone" @input="cleanPhone"
        :class="{ 'is-valid': isValid, 'is-invalid': !isValid && phone.length > 0 }"
        class="w-full border rounded text-center text-lg py-2" />

</template>

<script setup>
import { ref, computed } from 'vue';

defineProps({
    labelText: String
});

const phone = ref('');

// Вычисляемое свойство для проверки валидности номера телефона
const isValid = computed(() => {
    const regex = /^(?:\+?\d{11})$/;
    return regex.test(phone.value);
});

// Функция для очистки ввода телефонного номера
const cleanPhone = (event) => {
    let input = event.target.value;
    // Удаляем все нецифровые символы, кроме плюса
    input = input.replace(/[^\d+]/g, '');
    // Удаляем все знаки плюса, кроме одного в начале строки
    input = input.charAt(0) === '+' ? '+' + input.slice(1).replace(/\+/g, '') : input.replace(/\+/g, '');
    // Ограничиваем общее количество цифр до 11
    input = input.slice(0, input.charAt(0) === '+' ? 12 : 11);
    phone.value = input;
};
</script>
<style>
/* Общие стили для поля ввода */
input[type="tel"] {
    transition: border-color 0.2s;
    outline: none;
}

/* Стили для валидного состояния */
.is-valid, .is-valid:focus {
    border-color: green;
}

/* Стили для невалидного состояния */
.is-invalid, .is-invalid:focus {
    border-color: red;
}

/* Стили для состояния фокуса без валидации */
input[type="tel"]:focus:not(.is-valid):not(.is-invalid) {
    border-color: blue;
}
</style>