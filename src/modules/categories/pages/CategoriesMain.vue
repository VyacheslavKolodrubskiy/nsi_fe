<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { QTableProps } from 'quasar'
import { useCategoriesStore } from '../categories.store'

const simple = [
  {
    label: 'Good food',
    children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }],
  },
  {
    label: 'Good service (disabled node)',
    children: [{ label: 'Prompt attention' }, { label: 'Professional waiter' }],
  },
  {
    label: 'Pleasant surroundings',
    children: [
      { label: 'Happy atmosphere' },
      { label: 'Good table presentation' },
      { label: 'Pleasing decor' },
    ],
  },
]

const pagination = ref<QTableProps['pagination']>({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
})

const categoriesStore = useCategoriesStore()
const { fetchCategories } = categoriesStore
const { categories } = storeToRefs(categoriesStore)

if (!categories.value?.length) {
  pagination.value?.page && fetchCategories(pagination.value.page)
}
</script>

<template>
  <div class="row no-wrap q-col-gutter-md">
    <div class="col">
      <div class="card">
        <div class="flex justify-between">
          <div>
            <div class="text-h2">Категории каталога</div>

            <div class="text-color-2 text-caption">Список всех категорий</div>
          </div>

          <QIcon name="add_circle_outlined" size="sm" />
        </div>

        <QTree
          default-expand-all
          no-connectors
          node-key="label"
          :nodes="simple"
        />

        <div class="q-gutter-md text-right">
          <QBtn
            class="rounded-borders"
            color="primary"
            dense
            label="Сохранить"
            no-caps
            style="height: 50px; width: 108px"
          />

          <QBtn
            class="rounded-borders"
            color="primary"
            dense
            label="Отмена"
            no-caps
            outline
            style="height: 50px; width: 89px"
          />
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card" style="background: #e8e9eb">
        <div class="text-center">
          <BaseIcon name="info" />

          <div>
            Создайте категорию в дереве разделов и заполните данные в форме
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
