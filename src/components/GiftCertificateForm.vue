<script setup>
import { ref, computed } from 'vue';

const qnt = ref(1);
const recipientName = ref('Для Ярошенко Евсея Олеговича');
const bayerEmail = ref('');
const unitPrice = ref(3400);
const certificateNum = ref(123456);
const phoneNumber = ref('');

const certificateSubTitle = computed(() =>
  qnt.value === 1 ? 'на мастер-класс живописи' : `на ${qnt.value} мастер-класса живописи`
);

const totalPrice = computed(() => qnt.value * unitPrice.value);

const certificateExpireDate = computed(() => {
  const expireDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
  const day = expireDate.getDate().toString().padStart(2, '0');
  const month = (expireDate.getMonth() + 1).toString().padStart(2, '0');
  const year = expireDate.getFullYear();
  return `${day}.${month}.${year}`;
});

const isValidEmail = email => {
  const emailRegex = /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const isEmailValid = computed(() => isValidEmail(bayerEmail.value));

const increment = () => {
  if (qnt.value < 4) qnt.value++;
};

const decrement = () => {
  if (qnt.value > 1) qnt.value--;
};
</script>

<template>
  <section id="gift" class="py-10">
    <div class="sm:container sm:mx-auto sm:w-10/12">
      <h1 class="text-center text-5xl font-sans uppercase mb-3">Подарочный сертификат</h1>
      <h2 class="text-center text-3xl font-sans uppercase mb-10">на мастер-класс живописи</h2>
      <div class="grid sm:grid-cols-12">
        <div class="sm:col-span-7">

        </div>
        <div class="sm:col-span-5">
          <form class="bg-stone-50 border sm:rounded-lg w-screen sm:max-w-md">
            <div class="sm:px-8 sm:py-5 p-5">
              <h4 class="sm:text-2xl sm:font-medium sm:mb-2 text-xl font-medium mb-1">Для кого сертификат</h4>
              <p class="sm:leading-tight mb-3">Будет написано на сертификате, например, «Для Анастасии Аникиной» или
                «Для
                Алексея».</p>
              <input type="text"
                class="focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:p-3 sm:border sm:rounded-lg sm:w-full sm:mb-3 w-full p-3 border rounded-lg text-lg mb-3"
                id="recipientName" placeholder="Фамилия Имя" v-model="recipientName">
              <div class="flex text-center justify-evenly">
                <div class="sm:w-6/12">
                  <h4 class="mb-3 text-lg font-medium">Стоимость</h4>
                  <span class="leading-12 whitespace-nowrap text-5xl leading-none flex justify-center items-end">{{
                    totalPrice }}<span class="text-2xl leading-12 text-stone-600 ml-1">₽</span></span>
                </div>
                <div class="sm:w-6/12 sm:flex sm:flex-col">
                  <h4 class="mb-3 text-lg font-medium">Количество</h4>
                  <div class="flex self-center">
                    <button class="p-2 bg-gray-300 text-gray-800 disabled:bg-gray-200 rounded-l-lg h-12 w-12"
                      type="button" @click="decrement" :disabled="qnt <= 1">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white mx-auto" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 12h14" />
                      </svg>
                    </button>
                    <input type="tel"
                      class="p-1 text-4xl text-center border-t border-b border-stone-200 bg-white focus:outline-none h-12 w-12"
                      v-model="qnt" readonly />
                    <button class="rounded-r-lg p-2 bg-gray-300 text-gray-800 disabled:bg-gray-200 h-12 w-12"
                      type="button" @click="increment" :disabled="qnt >= 4">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white mx-auto" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 12h14m-7 7V5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="ratio-a6 bg-image mx-auto border-y mt-5 mb-2">
              <div class="content flex flex-col justify-between py-2">
                <div class="px-6 lobster text-shadow flex flex-col">
                  <span class="text-2xl">Подарочный сертификат</span>
                  <span class="text-xl -mt-1">{{ certificateSubTitle }}</span>
                </div>
                <div
                  class="lobster text-shadow text-center text-3xl sm:text-4xl leading-tight flex self-center w-10/12 mt-2 mb-3 sm:my-0 overflow-hidden line-clamp-3">
                  {{ recipientName }}</div>
                <div class="flex flex-col text-sm items-center">
                  <div class="w-7/12 leading-none whitespace-nowrap">
                    <div class="font-medium">Студия живописи «АртМир»</div>
                    <div class="font-medium">Запись на сайте: artmir.ru/mk</div>
                    <div>Телефон: 907-64-49</div>
                    <div class="py-1">Действителен до: <b>{{ certificateExpireDate }}</b></div>
                  </div>
                  <div class="text-center font-bold text-2xl leading-none mb-3 sm:text-3xl">№ {{ certificateNum }}</div>
                </div>

              </div>
            </div>
            <div class="p-5">
              <div class="">
                <h5 class="text-lg mb-1 font-medium">Данные покупателя</h5>
                <p class="leading-tight mb-3">
                  Напишите адрес электронной почты, на него автоматически будет отправлен сертификат сразу после оплаты.
                </p>
                <div class="flex flex-col space-y-3 sm:flex-row sm:flex sm:space-y-0 sm:space-x-3 sm:mb-3">
                  <div>
                    <label for="bayerEmail" class="font-medium flex mb-1">Напишите Email:</label>
                    <input type="email"
                      class="w-full p-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      id="bayerEmail" placeholder="info@mail.ru" v-model="bayerEmail">
                  </div>
                  <div>
                    <label for="bayerPhone" class="font-medium flex mb-1">Напишите телефон:</label>
                    <input type="tel"
                      class="w-full p-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      id="bayerPhone" v-model="phoneNumber" placeholder="+79219213211" />
                  </div>
                </div>
                <p class="mb-0 leading-tight sm:mb-5">
                  Нажимая кнопку "Оплатить", вы соглашаетесь с <a href="#">политикой конфиденциальности</a>.
                </p>
                <div class="text-center">
                  <button type="button"
                    class="btn btn-lg btn-danger hover:bg-red-700 bg-red-600 text-white rounded text-lg font-medium px-10 py-3 mt-3 mb-10">Оплатить
                    {{ totalPrice }} ₽
                  </button>
                </div>
                <div class="flex justify-center mb-5">
                  <img style="
								max-height: 24px;
								" src="https://artmir.ru/img/mir-logo.svg" alt="логотип платежной системы" class="img-fluid me-3">
                  <img style="
								max-height: 24px;
								" src="https://artmir.ru/img/SBP.svg" alt="логотип платежной системы" class="img-fluid me-1">
                  <span style="font-size: 28px;line-height: 22px;">СБП</span>
                  <svg width="36" height="28" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" fill="#000000" class="ms-2" style="margin-top: -2px;">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="7" cy="12" r="10" fill="#EA001B"></circle>
                        <circle cx="17" cy="12" r="10" fill="#FFA200" fill-opacity=".8"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br>
</template>

<style>
.lobster {
  font-family: "Lobster", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.text-shadow {
  text-shadow:
    -1px -1px 0 #fff,
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
}

.text-with-white-stroke {
  color: black;
  /* Цвет текста */
  -webkit-text-stroke-width: 1px;
  /* Ширина обводки */
  -webkit-text-stroke-color: white;
  /* Цвет обводки */
  text-stroke-width: 1px;
  /* Ширина обводки для всех остальных браузеров, поддерживающих это свойство */
  text-stroke-color: white;
  /* Цвет обводки */
}

/* Custom A6 ratio */
.ratio-a6 {
  position: relative;
  width: 100%;
  /* You can adjust this as needed */
}

.ratio-a6::before {
  content: "";
  display: block;
  padding-top: 70.7%;
  /* A6 aspect ratio height/width */
}

/* Ensure the content fills the container */
.ratio-a6 .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Background image styling */
.bg-image {
  background-image: url('https://artmir.ru/img/gift/cert_blank.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* max-width: 420px;
  max-height: 297px; */
}
</style>
