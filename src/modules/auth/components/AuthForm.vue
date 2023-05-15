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
    class="text-center q-pa-md full-width"
    flat
    style="border-radius: 10px; max-width: 400px; min-height: 370px"
  >
    <QCardSection>
      <div>
        <h2 class="q-mb-sm">Вход в личный кабинет</h2>

        <div
          class="text-subtitle1"
          style="color: #7f8a94"
        >
          Войдите для работы с Мастер-каталогом
        </div>
      </div>
    </QCardSection>

    <QCardSection>
      <QForm
        class="auth-form"
        @reset="onReset"
        @submit="onSubmit"
      >
        <QInput
          v-model="form.email"
          class="q-mb-md"
          label="Электронная почта"
          outlined
          type="email"
        />

        <QInput
          v-model="form.password"
          class="q-mb-md"
          label="Пароль"
          outlined
          :type="passwordType"
        >
          <template v-slot:append>
            <QIcon
              class="cursor-pointer"
              color="#39444E"
              :name="passwordIcon"
              @click="showPassword = !showPassword"
            />
          </template>
        </QInput>

        <div class="column">
          <QBtn
            flat
            label="Забыли пароль?"
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
