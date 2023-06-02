<script setup lang="ts">
import AuthForm from '../components/form/AuthForm.vue'
import authProfile from 'assets/img/auth-profile.png'
</script>

<template>
  <QPage class="bg-color" padding style="z-index: 1">
    <SvgIcon
      class="q-mx-auto block q-mt-md"
      height="24"
      name="logo"
      width="160"
    />

    <SvgIcon
      class="absolute-bottom-left"
      height="180"
      name="auth-decor"
      style="z-index: -1"
      width="320"
    />

    <div class="row no-wrap window-height">
      <div class="col flex flex-center q-px-md">
        <AuthForm />
      </div>

      <div class="col flex flex-center q-px-md">
        <QImg
          fit="contain"
          no-spinner
          :src="authProfile"
          style="max-width: 450px; max-height: 256px"
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
