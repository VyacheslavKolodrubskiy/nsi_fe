<script setup lang="ts">
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

const options = [
  {
    label: 'Администратор',
  },
  {
    label: 'Пользователь',
  },
  {
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
      label-color="label-color"
      outlined
    />

    <QInput
      v-model="form.email"
      class="q-mb-md"
      label="Почта/ Логин"
      label-color="label-color"
      outlined
    />

    <QSelect
      v-model="form.role"
      class="q-mb-xs"
      label="Роль пользователя"
      label-color="label-color"
      :options="options"
      outlined
    />

    <QCheckbox
      v-model="form.userBlocked"
      class="q-mb-md"
      label="Заблокировать пользователя"
    />

    <QBtn
      class="q-pa-md full-width"
      color="primary"
      label="Сохранить"
      type="submit"
    />
  </QForm>
</template>
