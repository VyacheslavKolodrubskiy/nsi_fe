<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { QSelectOption, QTable } from 'quasar'
import { columns } from '../catalog.constants'
import { CatalogFilters } from '../catalog.interfaces'
import { useCatalogStore } from '../catalog.store'

const options = ref<QSelectOption[]>([
  {
    value: 'catalog',
    label: 'Каталог',
  },
  {
    value: 'catalog',
    label: 'Каталог',
  },
  {
    value: 'catalog',
    label: 'Каталог',
  },
])

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
  rowsNumber: 20,
})

const filter = ref('')
const filled = ref(20)
const selected = ref([])
const catalogStore = useCatalogStore()
const { fetchCatalog } = catalogStore
const { catalog, totalCount } = storeToRefs(catalogStore)
const currentOption = ref<QSelectOption>(options.value[0])

const filters = ref<CatalogFilters>({
  page: pagination.value.page,
  search: filter.value,
  page_size: pagination.value.rowsPerPage,
  sort_name: pagination.value.sortBy,
})

async function onUpdatePagination(page: number) {
  filters.value.page = page
  await fetchCatalog(filters.value)
  pagination.value.rowsNumber = totalCount.value
}

watch(
  filter,
  async (value) => {
    if (value) {
      filters.value.search = value
      await fetchCatalog(filters.value)
    }
  },
  { immediate: true }
)

onMounted(async () => {
  await fetchCatalog(filters.value)
  pagination.value.rowsNumber = totalCount.value
})
</script>

<template>
  <div class="card">
    <QTable
      v-model:pagination="pagination"
      v-model:selected="selected"
      class="catalog-table"
      :columns="columns"
      :filter="filter"
      flat
      row-key="name"
      :rows="catalog"
      selection="single"
      table-header-class="text-color-2"
    >
      <template #top-left>
        <div>
          <div class="q-mb-md">
            <div class="q-mb-xs" style="font-size: 20px">Каталог товаров</div>

            <div class="text-color-2" style="font-size: 13px">
              Доступные Вам карточки
            </div>
          </div>

          <div class="flex items-center">
            <TableSelect
              v-model="currentOption"
              class="q-mr-md"
              :options="options"
            />

            <QBtn class="bg-color-4" flat no-caps :ripple="false">
              <div>Создать группу</div>

              <BaseIcon class="q-ml-sm" name="create-group" />
            </QBtn>
          </div>
        </div>
      </template>

      <template #top-right>
        <div class="flex">
          <div
            class="rounded-borders bg-color-4 q-px-xs q-mr-sm flex flex-center cursor-pointer"
          >
            <BaseIcon name="filter" />
          </div>

          <TableSearchInput v-model="filter" />
        </div>
      </template>

      <template #body-cell-filled="props">
        <QTd :props="props">
          <div
            class="relative-position"
            style="
              background: #dce0e3;
              border-radius: 20px;
              width: 50px;
              height: 7px;
            "
          >
            <div
              class="absolute-position"
              :style="{
                width: `${filled}%`,
                height: 'inherit',
                left: '0',
                background: '#e61771',
                borderRadius: 'inherit',
              }"
            />
          </div>
        </QTd>
      </template>

      <template #body-cell-action="props">
        <QTd :props="props">
          <QBtn
            class="rounded-borders q-px-md q-py-xs"
            color="primary"
            dense
            label="Взять в работу"
            no-caps
            size="sm"
          />
        </QTd>
      </template>

      <template #bottom>
        <QPagination
          active-color="primary"
          active-text-color="white"
          :boundary-numbers="false"
          class="custom-pagination"
          color="color-1"
          direction-links
          gutter="sm"
          :max="pagination.rowsNumber"
          :max-pages="6"
          :model-value="filters.page"
          outline
          push
          :ripple="false"
          rounded
          unelevated
          @update:model-value="onUpdatePagination"
      /></template>
    </QTable>
  </div>
</template>

<style scoped lang="scss">
.q-pagination :deep(.q-btn-item) {
  min-width: 2em !important;
}
.q-pagination :deep(.q-btn--outline)::before {
  border-color: $color-3;
}
.q-pagination :deep(.q-pagination__content) {
  .q-btn,
  .q-pagination__middle .q-btn {
    &:hover {
      background-color: $color-1 !important;

      &::before {
        border: none !important;
      }
      .q-icon,
      .block {
        color: $bg-color !important;
      }
    }
  }
}
</style>
