<script setup lang="ts"></script>

<template>
  <QLayout class="bg-color" style="z-index: 1" view="hHr LpR lFf">
    <SvgIcon
      class="absolute-bottom-left"
      height="180"
      name="auth-decor"
      style="z-index: -1"
      width="320"
    />

    <QHeader class="transparent">
      <QToolbar>
        <QToolbarTitle class="text-center q-mt-md">
          <SvgIcon height="24" name="logo" width="160" />
        </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <RouterView />
    </QPageContainer>

    <QFooter class="transparent">
      <QToolbar>
        <QToolbarTitle
          class="text-center"
          style="font-size: 13px; color: #7f8a94"
        >
          © 2023 Mechta. Все права защищены.
        </QToolbarTitle>
      </QToolbar>
    </QFooter>
  </QLayout>
</template>

<style lang="scss">
.bg-color {
  background-image: linear-gradient(to right, #f2f3f3 50%, #e7e9e9 50%);
}
</style>
