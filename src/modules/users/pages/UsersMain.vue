<script setup lang="ts">
import { QTableColumn } from 'quasar'
import { useQuasar } from 'quasar'
import EditUserModal from '../components/modal/EditUserModal.vue'

const filter = ref('')

const $q = useQuasar()

function createNewUser() {
  console.log('createNewUser')
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
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'email',
    align: 'left',
    label: 'Почта/ Логин',
    field: 'email',
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'role',
    align: 'left',
    label: 'Роль',
    field: 'role',
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'lastLoginTime',
    align: 'left',
    label: 'Время последнего входа',
    field: 'lastLoginTime',
    headerStyle: 'color: #7F8A94',
  },
  {
    name: 'status',
    align: 'left',
    label: 'Статус',
    field: 'status',
    headerStyle: 'color: #7F8A94',
  },
]

const rows = [
  {
    name: 'Марина Кравец',
    email: 'm.kravets@machta.kz',
    role: 'Контент-менеджер',
    lastLoginTime: '12:34  |  04.04.2023',
    status: 'Активен',
  },
  {
    name: 'Камар',
    email: 'm.kravets@machta2.kz',
    role: 'Контент-менеджер2',
    lastLoginTime: '12:34  |  04.04.2023',
    status: 'Активен',
  },
]
</script>

<template>
  <QBtn
    class="q-mb-lg q-pa-md"
    color="primary"
    icon="add_circle_outline"
    label="Создать нового пользователя"
    @click="createNewUser"
  />

  <div
    class="q-py-lg q-px-xl bg-white"
    style="border-radius: 10px"
  >
    <QTable
      :columns="columns"
      :filter="filter"
      flat
      row-key="name"
      :rows="rows"
    >
      <template #top-left>
        <div>
          <div class="q-mb-md">
            <div style="font-size: 20px; color: #39444e">
              Список пользователей
            </div>

            <div style="font-size: 13px; color: #7f8a94">
              Все пользователи Мастер-каталога
            </div>
          </div>

          <QInput
            v-model="filter"
            dense
            outlined
            placeholder="Найти в таблице"
            style="background-color: #f7f7f7"
            type="text"
          >
            <template #append>
              <SvgIcon
                height="24"
                name="search"
                width="24"
              />
            </template>
          </QInput>
        </div>
      </template>

      <template v-slot:body-cell-name="props">
        <QTd :props="props">
          <div class="flex items-center no-wrap">
            <QImg
              no-spinner
              src="src/assets/user.png"
              style="width: 40px; height: 40px"
            />

            <div>{{ props.value }}</div>
          </div>
        </QTd>
      </template>

      <template v-slot:body-cell-status="props">
        <QTd :props="props">
          <div class="flex items-center no-wrap">
            <div>{{ props.value }}</div>

            <SvgIcon
              class="q-ml-lg cursor-pointer"
              color="#39444E"
              name="edit"
              @click="onEditClick(props.key)"
            />
          </div>
        </QTd>
      </template>
    </QTable>
  </div>
</template>

<style scoped lang="scss"></style>
