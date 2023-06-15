<script setup lang="ts">
import { QTableColumn, QTableProps } from 'quasar'
import { useQuasar } from 'quasar'
import AddUserModal from '../components/modal/AddUserModal.vue'
import EditUserModal from '../components/modal/EditUserModal.vue'
import user from 'assets/img/user.png'

const filter = ref('')

const $q = useQuasar()

function addNewUser() {
  $q.dialog({
    component: AddUserModal,
  })
}

function onEditClick(key: string) {
  $q.dialog({
    component: EditUserModal,
    componentProps: {
      id: key,
    },
  })
}

const columns: QTableColumn[] = [
  {
    name: 'name',
    align: 'left',
    label: 'ФИО',
    field: 'name',
  },
  {
    name: 'email',
    align: 'left',
    label: 'Почта/ Логин',
    field: 'email',
  },
  {
    name: 'role',
    align: 'left',
    label: 'Роль',
    field: 'role',
  },
  {
    name: 'lastLoginTime',
    align: 'left',
    label: 'Время последнего входа',
    field: 'lastLoginTime',
  },
  {
    name: 'status',
    align: 'left',
    label: 'Статус',
    field: 'status',
  },
  {
    name: 'action',
    align: 'left',
    label: '',
    field: 'action',
  },
]

const rows = [
  {
    name: 'Марина Кравец',
    email: 'm.kravets@machta.kz',
    role: 'Контент-менеджер',
    lastLoginTime: '12:34  |  04.04.2023',
    status: 'Активен',
    action: '',
  },
]

const pagination = ref<QTableProps['pagination']>({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
})
</script>

<template>
  <QBtn
    class="q-mb-lg q-pa-md"
    color="primary"
    icon="add_circle_outline"
    label="Создать нового пользователя"
    @click="addNewUser"
  />

  <div class="card">
    <QTable
      v-model:pagination="pagination"
      :columns="columns"
      :filter="filter"
      flat
      row-key="name"
      :rows="
        Array.from({ length: 100 }, (_, index) => ({
          ...rows[0],
          name: `${rows[0].name} ${index}`,
        }))
      "
      table-header-class="text-color-2"
    >
      <template #top-left>
        <div>
          <div class="q-mb-md">
            <div class="q-mb-xs" style="font-size: 20px">
              Список пользователей
            </div>

            <div class="text-color-2" style="font-size: 13px">
              Все пользователи Мастер-каталога
            </div>
          </div>

          <TableSearchInput v-model="filter">
            <template></template>
          </TableSearchInput>
        </div>
      </template>

      <template #body-cell-name="props">
        <QTd :props="props">
          <div class="flex items-center no-wrap">
            <QImg
              fit="contain"
              height="40px"
              no-spinner
              no-transition
              :src="user"
              width="40px"
            />

            <div class="q-ml-sm">{{ props.value }}</div>
          </div>
        </QTd>
      </template>

      <template #body-cell-action="props">
        <QTd :props="props">
          <SvgIcon
            class="cursor-pointer"
            color="#39444E"
            name="edit"
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
  </div>
</template>

<style scoped lang="scss"></style>
