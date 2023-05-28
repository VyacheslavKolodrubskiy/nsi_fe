<script setup lang="ts"></script>

<template>
  <QBtnDropdown
    color="black"
    dropdown-icon="expand_more"
    flat
    :ripple="false"
  >
    <template #label>
      <QAvatar
        rounded
        size="50px"
      >
        <img src="src/assets/user.png" />
      </QAvatar>

      <div class="text-black q-ml-sm">Марина Кравец</div>
    </template>

    <QList class="text-center">
      <QItem
        v-close-popup
        clickable
      >
        <QItemSection>
          <QItemLabel>Профиль</QItemLabel>
        </QItemSection>
      </QItem>

      <QItem
        v-close-popup
        clickable
      >
        <QItemSection>
          <QItemLabel>Выход</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QBtnDropdown>
</template>
