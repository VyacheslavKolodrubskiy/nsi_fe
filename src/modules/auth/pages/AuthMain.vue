<script setup lang="ts">
import { useRouter } from 'vue-router'
import AuthForm from '../components/AuthForm.vue'
import authDecor from 'assets/img/auth-decor.png'
import authProfile from 'assets/img/auth-profile.png'

const router = useRouter()
</script>

<template>
  <QPage
    class="bg-color relative-position"
    padding
    style="z-index: 1"
  >
    <LogoIcon class="q-mx-auto block q-mt-md" />

    <img
      alt="auth-decor"
      class="absolute-bottom-left"
      height="180"
      :src="authDecor"
      style="z-index: -1"
      width="320"
    />

    <div class="row no-wrap window-height">
      <div class="col flex flex-center q-px-md">
        <AuthForm />
      </div>

      <div class="col flex flex-center q-px-md">
        <img
          alt="auth-profile"
          height="256"
          :src="authProfile"
          width="450"
        />
      </div>
    </div>

    <div
      class="text-center"
      style="font-size: 13px; line-height: 130%; color: #7f8a94"
    >
      © 2023 Mechta. Все права защищены.
    </div>
  </QPage>
</template>

<style scoped lang="scss">
.bg-color {
  background-image: linear-gradient(to right, #f2f3f3 50%, #e7e9e9 50%);
}
</style>
