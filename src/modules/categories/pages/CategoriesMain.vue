<script setup lang="ts">
import { managerOptions, supplierOptions } from '../categories.constants'
import { Category } from '../categories.interfaces'
import { useCategoriesStore } from '../categories.store'
import CategoriesEmpty from '../components/CategoriesEmpty.vue'

const categoryForm = reactive<Category>({
  description: '',
  id: '',
  is_group: false,
  manager_id: null,
  modified_at: `${new Date().toISOString()}`,
  name: '',
})

const categoriesStore = useCategoriesStore()
const { createCategory } = categoriesStore
const showCategoryForm = ref(false)

function onCreateCategory() {
  createCategory(categoryForm)
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

        <div class="col q-mb-md">
          <!-- <QTree
            v-model:expanded="expanded"
            icon="chevron_right"
            no-connectors
            node-key="label"
            :nodes="nodes"
          >
          </QTree> -->
        </div>

        <div class="flex justify-end no-wrap q-gutter-md">
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

        <div class="col q-mb-md">
          <QInput
            v-model="categoryForm.name"
            autocomplete="current-password"
            class="q-mb-sm"
            label="Название категории"
            label-color="color-1"
            outlined
          />

          <BaseSelectWithCheckbox
            v-model="categoryForm.manager_id"
            class="q-mb-sm"
            label="Назначить менеджера"
            :options="managerOptions"
          />

          <BaseEditor v-model="categoryForm.description" class="q-mb-sm" />

          <BaseSelectWithCheckbox
            v-model="categoryForm.product_group_id"
            class="q-mb-sm"
            label="Категория поставщиков"
            :options="supplierOptions"
          />
        </div>

        <div class="flex justify-end no-wrap q-gutter-md">
          <BaseButton label="Сохранить" @click="onCreateCategory" />

          <BaseButton label="Отмена" outline />
        </div>
      </div>
    </div>
  </div>
</template>
