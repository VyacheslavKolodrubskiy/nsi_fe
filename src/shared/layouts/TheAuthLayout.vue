<template>
  <QLayout view="hhh lpR fff">
    <SvgIcon
      class="absolute-bottom-left"
      height="180"
      name="auth-decor"
      style="z-index: -1"
      width="320"
    />

    <TheAuthHeader />

    <QPageContainer>
      <RouterView />
    </QPageContainer>

    <TheAuthFooter />
  </QLayout>
</template>
