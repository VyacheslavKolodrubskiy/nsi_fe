<script setup lang="ts"></script>

<template>
  <QLayout style="z-index: 1" view="hhh lpR fff">
    <TheAuthHeader />

    <QPageContainer>
      <QPage padding>
        <RouterView />
      </QPage>
    </QPageContainer>

    <TheAuthFooter />
  </QLayout>
</template>
