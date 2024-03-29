<script setup lang="ts">
import { QSelectOption, QTableProps } from 'quasar'
import { columns, options, rows } from '../main.constants'
import userImg from 'assets/img/user.png'

const filter = ref('')
const currentOption = ref<QSelectOption>(options.value[0])

const pagination = ref<QTableProps['pagination']>({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
})

function onEditClick(key: string) {
  console.log('onEditClick', key)
}
</script>

<template>
  <QTable
    v-model:pagination="pagination"
    :columns="columns"
    :filter="filter"
    flat
    row-key="name"
    :rows="rows"
    :rows-per-page-options="[8]"
    table-header-class="text-color-2"
  >
    <template #top-left>
      <div>
        <div class="q-mb-xs" style="font-size: 20px">Статистика менеджеров</div>

        <div class="text-color-2" style="font-size: 13px">
          Данные за {{ currentOption.label.toLowerCase() }}
        </div>
      </div>
    </template>

    <template #top-right>
      <TableSelect v-model="currentOption" :options="options" />
    </template>

    <template #body-cell-name="props">
      <QTd :props="props">
        <div class="flex items-center no-wrap">
          <QImg
            fit="contain"
            height="40px"
            no-spinner
            no-transition
            :src="userImg"
            width="40px"
          />

          <div class="q-ml-md">{{ props.value }}</div>
        </div>
      </QTd>
    </template>

    <template #body-cell-action="props">
      <QTd :props="props">
        <BaseIcon
          class="cursor-pointer"
          name="arrow-right"
          @click="onEditClick(props.key)"
      /></QTd>
    </template>

    <template #bottom="scope">
      <QPagination
        active-color="primary"
        active-text-color="white"
        :boundary-numbers="false"
        class="custom-pagination"
        color="color-1"
        direction-links
        gutter="sm"
        :max="scope.pagesNumber"
        :max-pages="6"
        :model-value="pagination?.page ?? 0"
        outline
        push
        :ripple="false"
        rounded
        size="15px"
        unelevated
        @update:model-value="(page) => (pagination!.page = page)"
      />
    </template>
  </QTable>
</template>

<style lang="scss"></style>
