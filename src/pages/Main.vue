<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <QPage padding>
    <QCard>
      <QCardSection>
        <div class="text-h6">Our Changing Planet</div>

        <div class="text-subtitle2">by John Doe</div>

        <QBtn
          color="primary"
          icon="check"
          label="OK"
          @click="router.push({ name: 'AuthMain' })"
        />
      </QCardSection>
    </QCard>
  </QPage>
</template>
