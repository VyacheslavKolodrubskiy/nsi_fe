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
        <div class="text-right q-mb-md">
          <QIcon
            class="cursor-pointer"
            name="close"
            size="sm"
            @click="onDialogCancel"
          />
        </div>

        <div class="text-center q-mb-md">
          <div class="q-mb-xs" style="font-size: 20px; color: #39444e">
            Создать нового пользователя
          </div>

          <div style="font-size: 13px; color: #7f8a94">Заполните форму</div>
        </div>

        <AddUserForm />
      </QCardSection>
    </QCard>
  </QDialog>
</template>
