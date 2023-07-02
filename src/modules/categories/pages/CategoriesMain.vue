<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { QTableProps } from 'quasar'
import { useCategoriesStore } from '../categories.store'
import CategoriesEmpty from '../components/CategoriesEmpty.vue'

const simple = [
  {
    label: 'Good food',
    children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }],
  },
  {
    label: 'Good service (disabled node)',
    children: [
      {
        label: 'Prompt attention',
        children: [
          { label: 'Happy atmosphere' },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' },
        ],
      },
      { label: 'Professional waiter' },
    ],
  },
  {
    label: 'Pleasant surroundings',
    children: [
      {
        label: 'Happy atmosphere',
        children: [
          { label: 'Happy atmosphere' },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' },
        ],
      },
      { label: 'Good table presentation' },
      {
        label: 'Pleasing decor',
      },
    ],
  },
]

const pagination = ref<QTableProps['pagination']>({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
})

const options = [
  {
    label: 'Стас Старовойтов',
    value: 1,
  },
  {
    label: 'Руслан Белый',
    value: 2,
  },
]

const categoriesStore = useCategoriesStore()
const { fetchCategories } = categoriesStore
const { categories } = storeToRefs(categoriesStore)

const selectedUsers = ref([])
const editedCategory = ref('Холодильники')
const expandedCategoriesIds = ref<string[]>([])
const editor = ref('What you see is <b>what</b> you get.')

const hasCategories = computed(() => {
  return !!Object.keys(selectedUsers.value)?.length
})

function onClick(id: string) {
  if (!expandedCategoriesIds.value.includes(id)) {
    expandedCategoriesIds.value.push(id)
  } else {
    expandedCategoriesIds.value = expandedCategoriesIds.value.filter(
      (item) => item !== id
    )
  }
}

if (!categories.value?.length) {
  pagination.value?.page && fetchCategories(pagination.value.page)
}
</script>

<template>
  <div class="min-h-inherit no-wrap q-col-gutter-md row">
    <div class="col">
      <div class="card column">
        <div class="q-mb-md row">
          <div class="col">
            <div class="text-h2">Категории каталога</div>

            <div class="text-caption text-color-2">Список всех категорий</div>
          </div>

          <BaseIcon class="col-auto cursor-pointer q-ml-xs" name="add-circle" />
        </div>

        <div class="col q-mb-lg">kek</div>

        <div class="q-gutter-md text-right">
          <BaseButton label="Сохранить" />

          <BaseButton label="Отмена" outline />
        </div>
      </div>
    </div>

    <div class="col">
      <CategoriesEmpty v-if="!hasCategories" />

      <div v-else class="card column">
        <div class="q-mb-md">
          <div class="text-h2">Редактировать категорию</div>

          <div class="text-caption text-color-2">Внесите новые данные</div>
        </div>

        <QInput
          v-model="editedCategory"
          autocomplete="current-password"
          class="q-mb-sm"
          label="Название категории"
          label-color="color-1"
          outlined
        />

        <QSelect
          v-model="selectedUsers"
          class="q-mb-sm"
          label="Назначить менеджера"
          label-color="color-1"
          multiple
          :options="options"
          outlined
        />

        <QEditor
          v-model="editor"
          class="col q-mb-lg"
          min-height="5rem"
          :toolbar="[
            [
              'bold',
              'italic',
              'strike',
              'underline',
              'subscript',
              'superscript',
            ],
          ]"
        />

        <div class="q-gutter-md text-right">
          <BaseButton label="Сохранить" />

          <BaseButton label="Отмена" outline />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
