<script setup lang="ts"></script>

<template>
  <QLayout view="hHh Lpr lFf">
    <TheHeader />

    <TheSidebar />

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>
