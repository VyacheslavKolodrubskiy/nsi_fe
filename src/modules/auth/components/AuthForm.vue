<script setup lang="ts">
import { useAuthStore } from '../auth.store'

interface Form {
  phone: string
  smsCode: string
}

const form = reactive<Form>({
  phone: '',
  smsCode: '',
})

const authStore = useAuthStore()
const showSmsCodeInput = ref(false)

function onSubmit() {
  authStore.sendValidatingCode(form.phone)
}
</script>

<template>
  <QCard
    class="text-center q-pa-lg full-width"
    flat
    style="border-radius: 10px; max-width: 400px"
  >
    <QCardSection>
      <div class="q-mb-lg">
        <h2 class="q-mb-sm">Вход в личный кабинет</h2>

        <div
          class="text-subtitle1"
          style="color: #7f8a94"
        >
          Войдите для работы с Мастер-каталогом
        </div>
      </div>

      <QForm @submit="onSubmit">
        <div class="q-mb-lg">
          <QInput
            v-if="!showSmsCodeInput"
            v-model="form.phone"
            class="q-mb-sm text-subtitle2"
            label="Мобильный телефон"
            label-color="label"
            mask="(###)-###-####"
            outlined
            prefix="+7"
          />

          <QInput
            v-else
            v-model="form.smsCode"
            label="Смс код"
            label-color="label"
            outlined
          />
        </div>

        <QBtn
          class="q-pa-md full-width rounded-borders"
          color="primary"
          label="Получить код"
          type="submit"
        />
      </QForm>
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.eye-icon-color {
  color: #39444e;
}
</style>
