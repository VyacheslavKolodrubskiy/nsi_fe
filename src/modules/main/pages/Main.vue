<script setup lang="ts">
import TableMain from '../components/TableMain.vue'
</script>

<template>
  <div class="q-col-gutter-md q-mb-lg row">
    <div class="col">
      <div class="card">
        <div class="q-mb-xl">
          <div class="q-mb-xs text-h2">Статусы товаров</div>

          <div class="text-color-2">
            Доли и количество всех товаров в различных статусах
          </div>
        </div>

        <PieChart />
      </div>
    </div>

    <div class="col">
      <div class="card">
        <div class="q-mb-xl">
          <div class="q-mb-xs text-h2">Аналитика завершенных карточек</div>

          <div class="text-color-2" style="font-size: 13px">
            Количество и процентное соотношение товаров в статусе Завершено
          </div>
        </div>

        <ColumnChart />
      </div>
    </div>
  </div>

  <div class="card">
    <TableMain />
  </div>
</template>
