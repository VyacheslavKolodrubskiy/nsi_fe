<script setup lang="ts">
import { QSelectOption } from 'quasar'

interface Form {
  name: string
  email: string
  role: string
  userBlocked: boolean
}

const emit = defineEmits(['submit'])

const form = reactive<Form>({
  name: '',
  email: '',
  role: '',
  userBlocked: false,
})

const options: QSelectOption[] = [
  {
    value: 'admin',
    label: 'Администратор',
  },
  {
    value: 'user',
    label: 'Пользователь',
  },
  {
    value: 'moderator',
    label: 'Модератор',
  },
]

function onSubmit() {
  emit('submit', form)
}
</script>

<template>
  <QForm @submit="onSubmit">
    <QInput
      v-model="form.name"
      class="q-mb-md"
      label="Имя пользователя"
      label-color="color-1"
      outlined
    />

    <QInput
      v-model="form.email"
      class="q-mb-md"
      label="Почта/ Логин"
      label-color="color-1"
      outlined
    />

    <QSelect
      v-model="form.role"
      class="q-mb-xs"
      label="Роль пользователя"
      label-color="color-1"
      :options="options"
      outlined
    />

    <QCheckbox
      v-model="form.userBlocked"
      checked-icon="img:src/assets/img/icons/checkbox-check.svg"
      class="q-mb-md"
      label="Заблокировать пользователя"
      unchecked-icon="img:src/assets/img/icons/checkbox-uncheck.svg"
    />

    <QBtn
      class="q-pa-md full-width"
      color="primary"
      label="Сохранить"
      type="submit"
    />
  </QForm>
</template>
