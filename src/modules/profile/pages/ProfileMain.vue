<script setup lang="ts"></script>

<template>
  <div class="row">
    <QCard
      class="col card q-mr-md"
      flat
    >
      <QCardSection class="q-pa-lg">
        <div class="q-mb-md">
          <div class="text-h6">Профиль</div>

          <div class="text-subtitle2">Данные вашего профиля</div>
        </div>

        <div class="row">
          <div class="column">
            <QImg
              class="q-mb-md"
              no-spinner
              src="src/assets/user.png"
              style="width: 150px; height: 150px"
            />

            <div class="self-center">
              <QIcon
                color="primary"
                name="print"
                size="30px"
              />

              <QIcon
                color="primary"
                name="print"
                size="30px"
              />
            </div>
          </div>

          <div class="q-ml-xl q-pt-lg">
            <div style="font-size: 20px">Марина Кравец</div>

            <div style="color: #e61771">m.kravets@machta.kz</div>

            <div style="font-weight: 700">Менеджер</div>
          </div>
        </div>
      </QCardSection>
    </QCard>

    <QCard
      class="col card"
      flat
    >
      <QCardSection class="q-pa-lg">
        <div class="text-h6">Our Changing Planet</div>

        <div class="text-subtitle2">by John Doe</div>
      </QCardSection>

      <QCardSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </QCardSection>
    </QCard>
  </div>
</template>

<style scoped lang="scss"></style>
