<script setup lang="ts">
import AddUserForm from 'modules/users/components/form/AddUserForm.vue'
import { useDialogPluginComponent } from 'quasar'

const emit = defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogCancel } = useDialogPluginComponent()
</script>

<template>
  <QDialog ref="dialogRef">
    <QCard flat style="width: 380px; border-radius: 10px">
      <QCardSection class="q-pb-xl q-px-lg">
        <div class="q-mb-md text-right">
          <QIcon
            class="cursor-pointer"
            name="close"
            size="sm"
            @click="onDialogCancel"
          />
        </div>

        <div class="q-mb-md text-center">
          <div class="q-mb-xs" style="font-size: 20px">
            Создать нового пользователя
          </div>

          <div class="text-color-2" style="font-size: 13px">
            Заполните форму
          </div>
        </div>

        <AddUserForm />
      </QCardSection>
    </QCard>
  </QDialog>
</template>
