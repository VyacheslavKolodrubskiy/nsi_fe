<script setup lang="ts">
import { QTableColumn } from 'quasar'
import { useQuasar } from 'quasar'
import AddUserModal from '../components/modal/AddUserModal.vue'
import EditUserModal from '../components/modal/EditUserModal.vue'

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
</script>

<template>
  <QBtn
    class="q-mb-lg q-pa-md"
    color="primary"
    icon="add_circle_outline"
    label="Создать нового пользователя"
    @click="addNewUser"
  />

  <div class="q-py-lg q-px-xl bg-white" style="border-radius: 10px">
    <QTable
      :columns="columns"
      :filter="filter"
      flat
      row-key="name"
      :rows="rows"
      table-header-style="color: #7F8A94"
    >
      <template #top-left>
        <div>
          <div class="q-mb-md">
            <div class="q-mb-xs" style="font-size: 20px">
              Список пользователей
            </div>

            <div style="font-size: 13px; color: #7f8a94">
              Все пользователи Мастер-каталога
            </div>
          </div>

          <SearchTableInput v-model="filter">
            <template></template>
          </SearchTableInput>
        </div>
      </template>

      <template v-slot:body-cell-name="props">
        <QTd :props="props">
          <div class="flex items-center no-wrap">
            <QImg
              no-spinner
              src="src/assets/img/user.png"
              style="width: 40px; height: 40px"
            />

            <div class="q-ml-sm">{{ props.value }}</div>
          </div>
        </QTd>
      </template>

      <template v-slot:body-cell-action="props">
        <QTd :props="props">
          <SvgIcon
            class="cursor-pointer"
            color="#39444E"
            name="edit"
            @click="onEditClick(props.key)"
        /></QTd>
      </template>
    </QTable>
  </div>
</template>

<style scoped lang="scss"></style>
