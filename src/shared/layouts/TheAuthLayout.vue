<template>
  <QLayout
    style="
      background-image: linear-gradient(to right, #f2f3f3 50%, #e7e9e9 50%);
      z-index: 1;
    "
    view="hhh lpR fff"
  >
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
