<script setup lang="ts">
interface Form {
  oldPassword: string
  newPassword: string
  repeatPassword: string
}

const form = reactive<Form>({
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
})

const isPwdOld = ref(true)
const isPwdNew = ref(true)
const isPwdRepeat = ref(true)

function onSubmit() {
  console.log('Submit')
}

function onReset() {
  console.log('Reset')
}
</script>

<template>
  <div class="q-mb-lg">
    <div class="q-mb-sm" style="font-size: 20px">Сменить пароль</div>

    <div style="font-size: 13px; color: #7f8a94">Заполните форму</div>
  </div>

  <QForm @reset="onReset" @submit="onSubmit">
    <div class="q-mb-md">
      <QInput
        v-model="form.oldPassword"
        autocomplete="current-password"
        class="q-mb-sm"
        label="Старый пароль"
        label-color="label-color"
        outlined
        :type="isPwdOld ? 'password' : 'text'"
      >
        <template #append>
          <QIcon
            class="cursor-pointer"
            :name="isPwdOld ? 'visibility_off' : 'visibility'"
            @click="isPwdOld = !isPwdOld"
          />
        </template>
      </QInput>

      <QInput
        v-model="form.newPassword"
        autocomplete="current-password"
        class="q-mb-sm"
        label="Новый пароль"
        label-color="label-color"
        outlined
        :type="isPwdNew ? 'password' : 'text'"
      >
        <template #append>
          <QIcon
            class="cursor-pointer"
            :name="isPwdNew ? 'visibility_off' : 'visibility'"
            @click="isPwdNew = !isPwdNew"
          />
        </template>
      </QInput>

      <QInput
        v-model="form.repeatPassword"
        autocomplete="current-password"
        label="Повторите новый пароль"
        label-color="label-color"
        outlined
        :type="isPwdRepeat ? 'password' : 'text'"
      >
        <template #append>
          <QIcon
            class="cursor-pointer"
            :name="isPwdRepeat ? 'visibility_off' : 'visibility'"
            @click="isPwdRepeat = !isPwdRepeat"
          />
        </template>
      </QInput>
    </div>

    <QBtn
      color="primary"
      label="Сохранить"
      style="
        width: 115px;
        height: 50px;
        background: #e61771;
        border-radius: 5px;
      "
      type="submit"
    />
  </QForm>
</template>
