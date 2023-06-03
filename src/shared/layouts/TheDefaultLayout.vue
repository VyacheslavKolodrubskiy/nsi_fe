<script setup lang="ts"></script>

<template>
  <div class="q-mx-auto" style="max-width: 1360px; padding: 0 40px">
    <QLayout view="hhh lpR fff">
      <TheHeader />

      <TheSidebar />

      <QPageContainer>
        <QPage style="padding: 40px 0 0 16px">
          <BaseBreadcrumbs />

          <RouterView />
        </QPage>
      </QPageContainer>

      <TheDefaultFooter />
    </QLayout>
  </div>
</template>
