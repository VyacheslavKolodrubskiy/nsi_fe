<script setup lang="ts">
import { useQuasar } from 'quasar'
import AddUserModal from '../components/modal/AddUserModal.vue'
import EditUserModal from '../components/modal/EditUserModal.vue'
import { columns, rows } from '../user.constants'
import user from 'assets/img/user.png'

const $q = useQuasar()
const page = ref(1)
const filter = ref('')

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

watch(
  page,
  (newPage) => {
    console.log('newPage:', newPage)
  },
  { immediate: true }
)
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

          <TableSearchInput v-model="filter" />
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
          <BaseIcon
            class="cursor-pointer"
            color="#39444E"
            name="edit"
            @click="onEditClick(props.key)"
        /></QTd>
      </template>

      <template #bottom>
        <BasePagination v-model="page" />
      </template>
    </QTable>
  </div>
</template>

<style scoped lang="scss"></style>
