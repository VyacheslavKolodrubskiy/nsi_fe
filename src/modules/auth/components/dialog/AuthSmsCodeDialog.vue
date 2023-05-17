<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { formatPhoneNumber } from 'utils/common'
import { useAuthStore } from '../../auth.store'

const props = defineProps<{
  phone: string
}>()

defineEmits([...useDialogPluginComponent.emits])
const { dialogRef, onDialogHide } = useDialogPluginComponent()

const timer = ref(0)
const smsCode = ref('')
const authStore = useAuthStore()

function handleClick() {
  timer.value = 60
  authStore.sendValidatingCode(props.phone)
}

watchEffect(() => {
  if (timer.value > 0) {
    setTimeout(() => {
      timer.value--
    }, 1000)
  }

  if (smsCode.value.length === 4) {
    console.log(1)
  }
})
</script>

<template>
  <QDialog
    ref="dialogRef"
    @hide="onDialogHide"
  >
    <QCard
      class="text-center full-width"
      flat
      style="max-width: 300px"
    >
      <QCardSection class="q-pa-lg">
        <QIcon
          v-close-popup
          class="block q-ml-auto cursor-pointer q-mb-md"
          name="close"
          size="24px"
        />

        <div class="q-mb-lg">
          <div class="text-grey q-mb-md">
            <div class="q-mb-sm">
              Мы отправили код <br />

              подтверждения на номер <br />
            </div>

            <div>{{ formatPhoneNumber(phone) }}</div>
          </div>

          <button
            v-close-popup
            class="text-blue"
            type="button"
          >
            Изменить номер
          </button>
        </div>

        <QInput
          v-model="smsCode"
          class="q-mb-md"
          label="Код из SMS"
          label-color="label-color"
          outlined
        />

        <div
          v-if="timer"
          class="text-grey"
        >
          Повторная отправка через {{ timer }}
        </div>

        <button
          v-else
          class="text-primary"
          type="button"
          @click="handleClick"
        >
          Повторная отправка
        </button>
      </QCardSection>
    </QCard>
  </QDialog>
</template>
