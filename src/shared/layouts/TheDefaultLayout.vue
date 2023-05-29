<script setup lang="ts"></script>

<template>
  <QLayout view="hhh lpR fff">
    <TheHeader />

    <TheSidebar />

    <QPageContainer>
      <QPage padding>
        <BaseBreadcrumbs />

        <RouterView />
      </QPage>
    </QPageContainer>
  </QLayout>
</template>
