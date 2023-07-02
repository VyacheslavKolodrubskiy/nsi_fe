<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { QTableProps } from 'quasar'
import { managerOptions, supplierOptions } from '../categories.constants'
import { useCategoriesStore } from '../categories.store'
import CategoriesEmpty from '../components/CategoriesEmpty.vue'

const pagination = ref<QTableProps['pagination']>({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
})

const categoriesStore = useCategoriesStore()
const { fetchCategories } = categoriesStore
const { categories } = storeToRefs(categoriesStore)

const expanded = ref([])
const showCategoryForm = ref(false)
const selectedManager = ref([])
const selectedSupplier = ref([])
const editedCategory = ref('')
const editor = ref('')

const hasCategories = computed(() => {
  return !!Object.keys(categories.value)?.length
})

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
            <div class="q-mb-xs text-h2">Категории каталога</div>

            <div class="text-caption text-color-2">Список всех категорий</div>
          </div>

          <BaseIcon
            class="col-auto cursor-pointer q-ml-xs"
            name="add-circle"
            @click="showCategoryForm = true"
          />
        </div>

        <div class="col q-mb-lg">
          <!-- <QTree
            v-model:expanded="expanded"
            icon="chevron_right"
            no-connectors
            node-key="label"
            :nodes="nodes"
          >
          </QTree> -->
        </div>

        <div class="q-gutter-md text-right">
          <BaseButton label="Сохранить" />

          <BaseButton label="Отмена" outline />
        </div>
      </div>
    </div>

    <div class="col">
      <CategoriesEmpty v-if="!showCategoryForm" />

      <div v-else class="card column">
        <div class="q-mb-md">
          <div class="q-mb-xs text-h2">Создать категорию</div>

          <div class="text-caption text-color-2">Заполните форму</div>
        </div>

        <div class="col">
          <QInput
            v-model="editedCategory"
            autocomplete="current-password"
            class="q-mb-sm"
            label="Название категории"
            label-color="color-1"
            outlined
          />

          <BaseSelectWithCheckbox
            v-model="selectedManager"
            class="q-mb-sm"
            label="Назначить менеджера"
            :options="managerOptions"
          />

          <BaseEditor v-model="editor" class="q-mb-sm" />

          <BaseSelectWithCheckbox
            v-model="selectedSupplier"
            class="q-mb-sm"
            label="Категория поставщиков"
            :options="supplierOptions"
          />
        </div>

        <div class="q-gutter-md text-right">
          <BaseButton label="Сохранить" />

          <BaseButton label="Отмена" outline />
        </div>
      </div>
    </div>
  </div>
</template>
