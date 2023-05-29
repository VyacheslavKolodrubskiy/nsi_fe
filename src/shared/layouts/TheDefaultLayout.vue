<script setup lang="ts">
import { PageName } from 'shared/enums/common'
</script>

<template>
  <QLayout view="hhh lpR fff">
    <TheHeader />

    <TheSidebar />

    <QPageContainer>
      <QPage padding>
        <QBreadcrumbs
          active-color="grey"
          class="q-mb-lg"
          separator="."
          separator-color="grey"
        >
          <QBreadcrumbsEl
            label="Home"
            :to="{ name: PageName.DEFAULT }"
          />

          <QBreadcrumbsEl
            label="Components"
            :to="{ name: PageName.DEFAULT }"
          />

          <QBreadcrumbsEl
            label="Breadcrumbs"
            :to="{ name: PageName.DEFAULT }"
          />
        </QBreadcrumbs>

        <RouterView />
      </QPage>
    </QPageContainer>
  </QLayout>
</template>
