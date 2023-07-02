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

const categoriesStore = useCategoriesStore()
const { fetchCategories } = categoriesStore
const { categories } = storeToRefs(categoriesStore)

const selectedUsers = ref([])
const editedCategory = ref('Холодильники')
const expandedCategoriesIds = ref<string[]>([])

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

const editor = ref('What you see is <b>what</b> you get.')

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
  <div class="row no-wrap q-col-gutter-md min-h-inherit">
    <div class="col">
      <div class="card column">
        <div class="flex justify-between q-mb-md">
          <div>
            <div class="text-h2">Категории каталога</div>

            <div class="text-color-2 text-caption">Список всех категорий</div>
          </div>

          <QIcon name="add_circle_outlined" size="sm" />
        </div>

        <div class="q-mb-lg col">
          <div v-for="item in simple" :key="item.label">
            <div
              class="flex items-center cursor-pointer"
              style="padding: 11px 0; border-bottom: 1px solid #dce0e3"
              @click="onClick(item.label)"
            >
              <BaseIcon
                class="q-mr-sm"
                :class="{
                  'rotate-90': expandedCategoriesIds.includes(item.label),
                }"
                height="20"
                name="chevron-right"
                style="transition: 0.2s"
                width="20"
              />

              <div class="text-color-1">
                {{ item.label }}
              </div>
            </div>

            <QSlideTransition>
              <div v-if="expandedCategoriesIds.includes(item.label)">
                {{ item.children }}
              </div>
            </QSlideTransition>
          </div>
        </div>

        <div class="q-gutter-md text-right">
          <BaseButton label="Сохранить" />

          <BaseButton label="Отмена" outline />
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card column">
        <div class="q-mb-md">
          <div class="text-h2">Редактировать категорию</div>

          <div class="text-color-2 text-caption">Внесите новые данные</div>
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
      d
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
