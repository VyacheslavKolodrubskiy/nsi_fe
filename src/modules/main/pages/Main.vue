<script setup lang="ts">
import TableMain from '../components/TableMain.vue'
</script>

<template>
  <div class="row q-mb-lg q-col-gutter-md">
    <div class="col">
      <div class="card">
        <div class="q-mb-xs" style="font-size: 20px">Статусы товаров</div>

        <div class="text-color-2">
          Доли и количество всех товаров в различных статусах
        </div>

        <PieChart />
      </div>
    </div>

    <div class="col">
      <div class="card">
        <div class="q-mb-xs" style="font-size: 20px">
          Аналитика завершенных карточек
        </div>

        <div class="text-color-2" style="font-size: 13px">
          Количество и процентное соотношение товаров в статусе Завершено
        </div>

        <PieChart />
      </div>
    </div>
  </div>

  <div class="card">
    <TableMain />
  </div>
</template>
