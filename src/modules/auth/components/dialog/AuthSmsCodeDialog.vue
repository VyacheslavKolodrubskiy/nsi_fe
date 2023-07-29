<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useDialogPluginComponent } from 'quasar'
import { PageName } from 'shared/enums/common.enum'
import { formatPhoneNumber } from 'shared/utils/common.util'
import { useAuthStore } from '../../auth.store'

const props = defineProps<{
  phone: string
}>()

defineEmits([...useDialogPluginComponent.emits])
const { dialogRef, onDialogHide } = useDialogPluginComponent()

const timer = ref(0)
const smsCode = ref('')
const router = useRouter()
const { sendValidationCode, authenticateUser } = useAuthStore()

function handleClick() {
  timer.value = 60
  sendValidationCode(props.phone)
}

watchEffect(async () => {
  if (timer.value > 0) {
    setTimeout(() => {
      timer.value--
    }, 1000)
  }

  if (smsCode.value.length === 4) {
    const token = await authenticateUser(props.phone, +smsCode.value)

    if (token) {
      router.push({ name: PageName.MAIN })
    }

    onDialogHide()
  }
})
</script>

<template>
  <QDialog ref="dialogRef" @hide="onDialogHide">
    <QCard class="full-width text-center" flat style="max-width: 300px">
      <QCardSection class="q-pa-lg">
        <QIcon
          v-close-popup
          class="block cursor-pointer q-mb-md q-ml-auto"
          name="close"
          size="24px"
        />

        <div class="q-mb-lg">
          <div class="q-mb-md text-grey">
            <div class="q-mb-sm">
              Мы отправили код <br />

              подтверждения на номер <br />
            </div>

            <div>{{ formatPhoneNumber(phone) }}</div>
          </div>

          <button
            v-close-popup
            class="text-blue"
            style="border-bottom: 1px dashed currentColor"
            type="button"
          >
            Изменить номер
          </button>
        </div>

        <QInput
          v-model="smsCode"
          class="q-mb-md"
          label="Код из SMS"
          label-color="color-1"
          outlined
        />

        <div v-if="timer" class="text-grey">
          Повторная отправка через {{ timer }}
        </div>

        <button
          v-else
          class="text-primary"
          style="border-bottom: 1px dashed currentColor"
          type="button"
          @click="handleClick"
        >
          Повторная отправка
        </button>
      </QCardSection>
    </QCard>
  </QDialog>
</template>
