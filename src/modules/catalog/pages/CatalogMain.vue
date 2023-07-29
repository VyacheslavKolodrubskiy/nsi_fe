<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { QSelectOption, QTable } from 'quasar'
import { columns, options } from '../catalog.constants'
import { CatalogFilters } from '../catalog.interfaces'
import { useCatalogStore } from '../catalog.store'

const filled = ref(20)
const selection = ref<string[]>([])
const catalogStore = useCatalogStore()
const { fetchCatalog } = catalogStore
const { catalog, totalCount } = storeToRefs(catalogStore)
const currentOption = ref<QSelectOption>(options.value[0])

const filters = reactive<CatalogFilters>({
  page: 1,
  search: '',
  page_size: 8,
  sort_name: 'desc',
  rowsNumber: totalCount.value,
})

function onUpdateSelection(key: string) {
  if (selection.value.includes(key)) {
    selection.value.splice(selection.value.indexOf(key), 1)
  } else {
    selection.value.push(key)
  }
}

watch(
  () => filters,
  (newFilters) => {
    fetchCatalog(newFilters)
  },
  { deep: true, immediate: true }
)

onMounted(() => {
  fetchCatalog(filters)
})
</script>

<template>
  <div class="card">
    <QTable
      color="primary"
      :columns="columns"
      :filter="filters.search"
      flat
      :rows="catalog"
      :rows-per-page-options="[8]"
      :selected="selection"
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

      <template #body-selection="props">
        <Qth :props="props">
          <BaseCheckbox
            :model-value="selection"
            @update:model-value="onUpdateSelection(props.key)"
          />
        </Qth>
      </template>

      <template #top-right>
        <div class="flex">
          <div
            class="bg-color-4 cursor-pointer flex flex-center q-mr-sm q-px-xs rounded-borders"
          >
            <BaseIcon name="filter" />
          </div>

          <TableSearchInput v-model="filters.search" />
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
