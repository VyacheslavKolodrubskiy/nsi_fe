<script setup lang="ts">
import AuthForm from '../components/form/AuthForm.vue'
import authProfile from 'assets/img/auth-profile.png'
</script>

<template>
  <QPage class="flex flex-center" padding>
    <div
      class="relative-position flex items-end justify-center"
      style="width: 700px; height: 513px"
    >
      <QImg
        class="absolute-top"
        fit="contain"
        no-spinner
        no-transition
        :src="authProfile"
        style="left: 50%; top: 50%; transform: translate(-50%, -50%)"
      />

      <AuthForm style="height: auto" />
    </div>
  </QPage>
</template>
