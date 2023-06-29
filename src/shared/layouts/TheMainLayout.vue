<template>
  <div class="q-mx-auto" style="max-width: 1360px; padding: 0 40px">
    <QLayout view="hhh lpR fff">
      <TheMainHeader />

      <!-- <TheSidebar /> -->

      <QPageContainer>
        <QPage style="padding: 40px 0 0 16px">
          <TheBreadcrumbs />

          <RouterView />
        </QPage>
      </QPageContainer>

      <TheMainFooter />
    </QLayout>
  </div>
</template>
