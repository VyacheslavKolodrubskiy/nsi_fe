<script setup lang="ts"></script>

<template>
  <div style="padding: 0 40px">
    <QLayout view="hhh lpR fff">
      <TheHeader />

      <!-- <TheSidebar /> -->

      <QPageContainer>
        <QPage style="padding: 40px 0 0 40px">
          <BaseBreadcrumbs />

          <RouterView />
        </QPage>
      </QPageContainer>

      <TheFooter />
    </QLayout>
  </div>
</template>
