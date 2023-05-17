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
const { sendValidatingCode } = useAuthStore()
const phoneInputRef = ref<HTMLInputElement | null>(null)

const fullPhone = computed(() => {
  return `+7${form.phone}`
})

function onSubmit() {
  // sendValidatingCode(fullPhone.value)
  console.log('fullPhone.value:', fullPhone.value)

  $q.dialog({
    component: AuthSmsCodeDialog,
    componentProps: {
      phone: fullPhone.value,
    },
  }).onCancel(() => {
    phoneInputRef.value?.focus()
  })
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
        <QInput
          ref="phoneInputRef"
          v-model="form.phone"
          class="q-mb-sm text-subtitle2 q-mb-lg"
          label="Мобильный телефон"
          label-color="label-color"
          mask="(###)-###-####"
          outlined
          prefix="+7"
          unmasked-value
        />

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
