<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'

const emit = defineEmits([...useDialogPluginComponent.emits])

const {} = useDialogPluginComponent()
</script>

<template>
  <QDialog maximized>
    <QCard>
      <QCardSection> kek</QCardSection>
    </QCard>
  </QDialog>
</template>
