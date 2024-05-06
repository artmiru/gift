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
  <section id="gift">
    <div class="sm:container sm:mx-auto sm:w-10/12">

      <h1 class="text-center text-5xl font-sans uppercase mb-2">Подарочный сертификат</h1>
      <h2 class="text-center text-3xl font-sans uppercase mb-5">на мастер-класс живописи</h2>
      <div class="grid sm:grid-cols-12">
        <div class="sm:col-span-6"></div>
        <div class="sm:col-span-6">
          <form class="bg-stone-50 border sm:rounded-lg">
            <div class="px-8 py-5">
              <h4 class="sm:text-2xl sm:font-medium sm:mb-2 text-2xl font-medium mb-2">Для кого сертификат</h4>
              <p class="sm:leading-tight mb-3">Будет написано на сертификате, например, «Для Анастасии Аникиной» или
                «Для
                Алексея».</p>
              <input type="text"
                class="focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:p-3 sm:border sm:rounded-lg sm:w-full sm:mb-3 w-full p-3 border rounded-lg text-lg mb-3"
                id="recipientName" placeholder="Фамилия Имя" v-model="recipientName">
              <div class="flex space-x-3 text-center justify-around">
                <div class="sm:w-6/12">
                  <h4 class="mb-3 text-lg font-medium">Стоимость</h4>
                  <span class="text-5xl leading-12">{{ totalPrice }}</span> <span
                    class="text-2xl leading-12 text-stone-600">₽</span>
                </div>
                <div class="sm:w-6/12 sm:flex sm:flex-col">
                  <h4 class="mb-3 text-lg font-medium">Количество</h4>
                  <div class="flex self-center">
                    <button class="p-2 bg-gray-300 text-gray-800 disabled:bg-gray-200 rounded-l-lg h-14 w-14"
                      type="button" @click="decrement" :disabled="qnt <= 1">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white mx-auto" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 12h14" />
                      </svg>
                    </button>
                    <input type="tel"
                      class="p-1 text-4xl text-center border-t border-b border-stone-200 bg-white focus:outline-none h-14 w-14"
                      v-model="qnt" readonly />
                    <button class="rounded-r-lg p-2 bg-gray-300 text-gray-800 disabled:bg-gray-200 h-14 w-14"
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
            <div class="ratio-a6 bg-image mx-auto">
              <div class="content">
                <div class="ms-3 mt-2">
                  <div class="fs-2 lh-1 lobster text-shadow title">
                    Подарочный сертификат
                  </div>
                  <div class="fs-4 lh-1 lobster subtitle text-shadow">
                    {{ certificateSubTitle }}
                  </div>
                </div>
                <div class="d-flex fs-1 justify-content-center lh-1 px-4">
                  <div class="cert-name lobster text-shadow text-center">
                    {{ recipientName }}
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <div class="bg-opacity-75 bg-white mb-2 mx-auto px-1 rounded-3"
                    style="font-size: 0.9rem; line-height: 1rem; width: 290px;">
                    <div class="fw-medium fs-6 mb-1">
                      Студия живописи «АртМир»
                    </div>
                    <div>
                      <span class="fw-medium">Запись на сайте: artmir.ru/mk</span>
                      <br />
                      Телефон: 907-64-49
                    </div>
                    <div class="d-flex flex-row">
                      <span class="align-self-center lh-sm me-1 text-end">Действителен до:
                      </span>
                      <span class="align-self-center d-flex fw-medium lh-1">{{ certificateExpireDate }}</span>
                    </div>
                  </div>
                  <div class="d-flex flex-row justify-content-evenly mb-3 px-2">
                    <div class="align-self-center bg-opacity-75 bg-white d-flex fs-3 fw-bold lh-1 rounded-2 pe-1 mb-1">
                      № {{ certificateNum }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mb-3">
              <div class="row g-3">
                <h5 class="mb-0">Данные покупателя</h5>
                <p class="mb-0">
                  Напишите адрес электронной почты, на него автоматически будет отправлен сертификат сразу после оплаты.
                </p>
                <div class="col-sm-6">
                  <div class="form-floating">
                    <input type="email" class="form-control" id="bayerEmail" placeholder="Email" v-model="bayerEmail">
                    <label for="bayerEmail">Напишите Email</label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-floating">
                    <input type="tel" class="form-control" id="bayerPhone" v-model="phoneNumber" />
                    <label for="bayerPhone">Номер телефона</label>
                  </div>
                </div>
                <p class="mb-0">
                  Нажимая кнопку "Оплатить", вы соглашаетесь с <a href="#">политикой конфиденциальности</a>.
                </p>
                <div class="col-12 text-center">
                  <button type="button" class="btn btn-lg btn-danger my-3">Оплатить {{ totalPrice }} ₽</button>
                </div>
                <div class="mt-4 align-content-center d-flex justify-content-center text-center">
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
