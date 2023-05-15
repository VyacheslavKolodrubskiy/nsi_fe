<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue'
import authDecor from 'assets/img/auth-decor.png'
import logo from 'assets/img/icons/mechta-logo.svg'
</script>

<template>
  <QPage
    class="bg-color relative-position"
    padding
  >
    <img
      alt="logo"
      class="q-mx-auto q-mt-md block"
      :src="logo"
    />

    <img
      alt="decor"
      class="absolute-bottom-left"
      :src="authDecor"
    />

    <AuthForm />
  </QPage>
</template>

<style scoped lang="scss">
.bg-color {
  background-image: linear-gradient(to right, #f2f3f3 50%, #e7e9e9 50%);
}
</style>
