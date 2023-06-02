<script setup lang="ts">
import AuthForm from '../components/form/AuthForm.vue'
import authProfile from 'assets/img/auth-profile.png'
</script>

<template>
  <QPage class="column" padding>
    <div class="row no-wrap items-center justify-center col">
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
  </QPage>
</template>
