<template>
    <label for="bayerEmail" class="font-medium flex mb-1">Напишите Email:</label>
    <input type="tel" :value="formattedPhone" @input="onInput" placeholder="_ (___) ___-__-__"
        class="w-full border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-center text-lg py-2" />
</template>

<script setup>
import { ref, computed } from 'vue';

const rawPhone = ref('');
const maxDigits = 11; // Максимальное количество цифр

// Обработчик события ввода
function onInput(event) {
    // Удаляем все нецифровые символы
    let value = event.target.value.replace(/\D/g, '');
    // Ограничиваем количество цифр
    if (value.length > maxDigits) {
        value = value.slice(0, maxDigits);
    }
    // Форматируем номер
    rawPhone.value = value; // Сохраняем только цифры для дальнейшего использования
    event.target.value = formatPhone(value); // Обновляем отображаемое значение с применением форматирования
}

// Функция форматирования номера телефона
function formatPhone(digits) {
    // Форматируем номер телефона
    const parts = [];
    if (digits.length > 0) parts.push(digits[0]);
    if (digits.length > 1) parts.push(' (' + digits.slice(1, 4));
    if (digits.length > 4) parts.push(') ' + digits.slice(4, 7));
    if (digits.length > 7) parts.push('-' + digits.slice(7, 9));
    if (digits.length > 9) parts.push('-' + digits.slice(9, 11));
    return parts.join('');
}

// Вычисляемое свойство для отображения отформатированного номера
const formattedPhone = computed(() => formatPhone(rawPhone.value));
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