<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { QSelectOption, QTable } from 'quasar'
import { columns, options } from '../catalog.constants'
import { CatalogFilters } from '../catalog.interfaces'
import { useCatalogStore } from '../catalog.store'

const filter = ref('')
const filled = ref(20)
const catalogStore = useCatalogStore()
const { fetchCatalog } = catalogStore
const { catalog, totalCount } = storeToRefs(catalogStore)
const currentOption = ref<QSelectOption>(options.value[0])

const filters = ref<CatalogFilters>({
  page: 1,
  search: filter.value,
  page_size: 8,
  sort_name: 'desc',
  rowsNumber: 20,
})

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

watch(
  () => filters.value.page,
  async (newPage) => {
    if (!newPage) {
      return
    }

    filters.value.page = newPage
    await fetchCatalog(filters.value)
    filters.value.rowsNumber = totalCount.value
  },
  { immediate: true }
)

onMounted(async () => {
  await fetchCatalog(filters.value)
  filters.value.rowsNumber = totalCount.value
})
</script>

<template>
  <div class="card">
    <QTable
      color="primary"
      :columns="columns"
      :filter="filter"
      flat
      :rows="catalog"
      :rows-per-page-options="[8]"
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
            class="bg-color-4 cursor-pointer flex flex-center q-mr-sm q-px-xs rounded-borders"
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
            class="q-px-md q-py-xs rounded-borders"
            color="primary"
            dense
            label="Взять в работу"
            no-caps
            size="sm"
          />
        </QTd>
      </template>

      <template #bottom>
        <BasePagination v-model="filters.page" />
      </template>
    </QTable>
  </div>
</template>

<style scoped lang="scss">
.q-table__container :deep(.q-table__top) {
  align-items: end;
  gap: 20px;
}
</style>
