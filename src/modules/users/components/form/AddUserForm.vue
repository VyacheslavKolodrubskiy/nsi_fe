<script setup lang="ts">
interface Form {
  name: string
  email: string
  role: string
}

const emit = defineEmits(['submit'])

const form = reactive<Form>({
  name: '',
  email: '',
  role: '',
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
      class="q-mb-lg"
      label="Роль пользователя"
      label-color="color-1"
      :options="options"
      outlined
    />

    <QBtn
      class="q-pa-md full-width"
      color="primary"
      label="Создать"
      type="submit"
    />
  </QForm>
</template>
