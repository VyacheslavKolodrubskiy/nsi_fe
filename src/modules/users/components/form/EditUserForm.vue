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

    <BaseCheckbox
      v-model="form.userBlocked"
      class="q-mb-md"
      label="Заблокировать пользователя"
    />

    <BaseButton
      class="full-width"
      height="50"
      label="Сохранить"
      type="submit"
    />
  </QForm>
</template>
