<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue'
</script>

<template>
  <QPage
    class="bg-color relative-position"
    padding
  >
    <LogoIcon class="q-mx-auto block q-mt-md" />

    <AuthForm />
  </QPage>
</template>

<style scoped lang="scss">
.bg-color {
  background-image: linear-gradient(to right, #f2f3f3 50%, #e7e9e9 50%);
}
</style>
