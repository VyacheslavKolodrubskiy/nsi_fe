<script setup lang="ts">
import TableMain from '../components/TableMain.vue'
</script>

<template>
  <div class="row q-mb-lg">
    <div class="col-6">
      <QCard class="card q-pa-lg q-mr-md">
        <QCardSection>
          <div class="q-mb-xs" style="font-size: 20px">Статусы товаров</div>

          <div class="text-color-2">
            Доли и количество всех товаров в различных статусах
          </div>
        </QCardSection>

        <PieChart />
      </QCard>
    </div>

    <div class="col-6">
      <QCard class="card col q-pa-lg">
        <QCardSection>
          <div class="q-mb-xs" style="font-size: 20px">
            Аналитика завершенных карточек
          </div>

          <div class="text-color-2" style="font-size: 13px">
            Количество и процентное соотношение товаров в статусе Завершено
          </div>
        </QCardSection>

        <PieChart />
      </QCard>
    </div>
  </div>

  <div class="q-pa-lg bg-white" style="border-radius: 10px">
    <TableMain />
  </div>
</template>
