<script setup lang="ts">
interface Form {
  email: string
  password: string
}

const form = ref<Form>({
  email: '',
  password: '',
})

const showPassword = ref(false)

const passwordType = computed(() => {
  return showPassword.value ? 'password' : 'text'
})

const passwordIcon = computed(() => {
  return showPassword.value ? 'visibility_off' : 'visibility'
})

function onReset() {
  console.log('onReset')
}

function onSubmit() {
  console.log('onSubmit')
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

      <QForm
        @reset="onReset"
        @submit="onSubmit"
      >
        <QInput
          v-model="form.email"
          class="q-mb-md text-subtitle2"
          label="Электронная почта"
          outlined
          type="email"
        />

        <QInput
          v-model="form.password"
          label="Пароль"
          outlined
          :type="passwordType"
        >
          <template v-slot:append>
            <QIcon
              class="cursor-pointer eye-icon-color"
              :name="passwordIcon"
              @click="showPassword = !showPassword"
            />
          </template>
        </QInput>

        <div class="column">
          <QBtn
            flat
            label="Забыли пароль?"
            style="font-size: 14px; line-height: 130%; color: #7f8a94"
            text-color="#7F8A94"
          />

          <QBtn
            class="q-pa-md rounded-borders"
            color="primary"
            label="Войти"
            type="submit"
          />
        </div>
      </QForm>
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.eye-icon-color {
  color: #39444e;
}
</style>
