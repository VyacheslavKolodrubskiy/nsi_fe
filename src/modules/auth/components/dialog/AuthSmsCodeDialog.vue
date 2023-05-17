<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { formatPhoneNumber } from 'utils/common'

const props = defineProps<{
  phone: string
}>()

defineEmits([...useDialogPluginComponent.emits])
const { dialogRef, onDialogHide } = useDialogPluginComponent()

const timer = ref(0)
const smsCode = ref('')

watch(
  timer,
  (value) => {
    if (value > 0) {
      setTimeout(() => {
        timer.value--
      }, 1000)
    }
  },
  { immediate: true }
)
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
          <div class="q-mb-sm">
            Мы отправили код <br />

            подтверждения на номер <br />
          </div>

          <div class="q-mb-md">{{ formatPhoneNumber(phone) }}</div>

          <button
            v-close-popup
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

        <div v-if="timer">Повторная отправка через {{ timer }}</div>

        <button
          v-else
          type="button"
          @click="timer = 60"
        >
          Повторная отправка
        </button>
      </QCardSection>
    </QCard>
  </QDialog>
</template>
