<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useAuthStore } from '../../auth.store'
import AuthSmsCodeDialog from '../dialog/AuthSmsCodeDialog.vue'

interface Form {
  phone: string
  smsCode: string
}

const form = reactive<Form>({
  phone: '7075115253',
  smsCode: '',
})

const $q = useQuasar()
const { sendValidationCode } = useAuthStore()
const phoneInputRef = ref<HTMLInputElement | null>(null)

const fullPhone = computed(() => {
  return `+7${form.phone}`
})

function onSubmit() {
  sendValidationCode(fullPhone.value)

  $q.dialog({
    component: AuthSmsCodeDialog,
    componentProps: {
      phone: fullPhone.value,
    },
  })
}
</script>

<template>
  <QCard
    class="card full-width q-pa-lg text-center"
    flat
    style="max-width: 400px"
  >
    <QCardSection>
      <div class="q-mb-lg">
        <h2 class="q-mb-sm">Вход в личный кабинет</h2>

        <div class="text-body1 text-color-2">
          Войдите для работы с Мастер-каталогом
        </div>
      </div>

      <QForm @submit="onSubmit">
        <QInput
          ref="phoneInputRef"
          v-model="form.phone"
          class="q-mb-lg q-mb-sm text-body1"
          label="Мобильный телефон"
          label-color="color-1"
          mask="(###)-###-####"
          outlined
          prefix="+7"
          unmasked-value
        />

        <QBtn
          class="full-width q-pa-md rounded-borders"
          color="primary"
          label="Получить код"
          type="submit"
        />
      </QForm>
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
