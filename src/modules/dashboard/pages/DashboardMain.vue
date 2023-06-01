<script setup lang="ts"></script>

<template>
  <div class="row no-wrap">
    <QCard class="col card q-mr-md" style="background-color: #f2f3f3">
      <QCardSection class="flex no-wrap">
        <div>
          <QImg
            class="q-mb-md col"
            fit="contain"
            no-spinner
            src="src/assets/img/user.png"
            style="width: 150px; height: 150px"
          />
        </div>

        <div class="q-ml-xl q-pt-lg">
          <div class="q-mb-sm" style="font-size: 20px">Марина Кравец</div>

          <div class="q-mb-sm" style="color: #e61771">m.kravets@machta.kz</div>

          <div style="font-weight: 700">Менеджер</div>
        </div>
      </QCardSection>
    </QCard>

    <QCard class="col card">
      <QCardSection class="full-height">
        <QImg fit="contain" src="src/assets/img/chart.png" />
      </QCardSection>
    </QCard>
  </div>
</template>

<style scoped lang="scss"></style>
