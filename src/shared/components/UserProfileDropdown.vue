<script setup lang="ts"></script>

<template>
  <QBtn flat>
    <QAvatar size="50px">
      <img src="src/assets/user.png" />
    </QAvatar>

    <div class="text-black q-ml-sm">Марина Кравец</div>

    <QIcon
      class="q-ml-md"
      color="black"
      name="expand_more"
    />

    <QMenu>
      <QList style="min-width: 100px">
        <QItem
          v-close-popup
          clickable
        >
          <QItemSection>New tab</QItemSection>
        </QItem>
      </QList>
    </QMenu>
  </QBtn>
</template>
