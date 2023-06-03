<script setup lang="ts"></script>

<template>
  <div class="row no-wrap q-mb-xl">
    <QCard class="col card q-mr-md bg-transparent">
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

          <div class="q-mb-sm text-primary">m.kravets@machta.kz</div>

          <div class="text-bold">Менеджер</div>
        </div>
      </QCardSection>
    </QCard>

    <QCard class="col card">
      <QCardSection class="full-height">
        <QImg
          fit="contain"
          no-spinner
          src="src/assets/img/chart.png"
          style="max-width: 413px; max-height: 160px"
        />
      </QCardSection>
    </QCard>
  </div>

  <div>
    <div class="q-mb-md flex items-center text-color-2">
      <div class="q-mr-md">
        Вам доступно
        <span class="text-color-1 text-weight-bold">273 товара</span>
      </div>

      <div class="">
        Вам доступно
        <span class="text-color-1 text-weight-bold">273 товара</span>
      </div>
    </div>

    <div class="row">
      <QCard class="col card q-mr-md" flat>
        <QCardSection class="flex items-center">
          <div
            style="
              background: rgba(230, 23, 113, 0.2);
              padding: 10px;
              border-radius: 100%;
              width: 60px;
              height: 60px;
            "
          >
            <div
              class="bg-primary flex flex-center"
              style="border-radius: 100%; width: 40px; height: 40px"
            >
              <SvgIcon height="20" name="purchase" width="20" />
            </div>
          </div>

          <div class="q-ml-md">
            <div class="text-no-wrap">
              <strong>30</strong>
              (30%)
            </div>

            <div class="text-color-2">Новые товары</div>
          </div>
        </QCardSection>
      </QCard>

      <QCard class="col card q-mr-md" flat>
        <QCardSection> content </QCardSection>
      </QCard>

      <QCard class="col card q-mr-md" flat>
        <QCardSection> content </QCardSection>
      </QCard>

      <QCard class="col card" flat>
        <QCardSection> content </QCardSection>
      </QCard>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
