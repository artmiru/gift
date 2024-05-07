<script setup>
import GiftCertificateForm from '../components/GiftCertificateForm.vue'
</script>

<template>
  <main>
    <section id="gift" class="py-10">
      <div class="sm:container sm:mx-auto sm:w-10/12">
        <h1 class="text-center text-5xl font-sans uppercase mb-3">Подарочный сертификат</h1>
        <h2 class="text-center text-3xl font-sans uppercase mb-10">на мастер-класс живописи</h2>
        <div class="grid sm:grid-cols-12">
          <div class="sm:col-span-7">

          </div>
          <div class="sm:col-span-5">
            <GiftCertificateForm />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
