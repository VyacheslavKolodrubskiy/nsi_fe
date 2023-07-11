<script setup lang="ts">
import ProfileForm from '../components/form/ProfileForm.vue'
import userImg from 'assets/img/user.png'
</script>

<template>
  <div class="q-col-gutter-md row">
    <div class="col">
      <div class="card">
        <div class="q-mb-md">
          <div style="font-size: 20px">Профиль</div>

          <div class="text-color-2" style="font-size: 13px">
            Данные вашего профиля
          </div>
        </div>

        <div class="q-gutter-x-xl row">
          <div class="column">
            <QImg
              class="q-mb-md"
              fit="contain"
              height="150px"
              no-spinner
              no-transition
              :src="userImg"
              width="150px"
            />

            <div class="self-center">
              <button class="q-mr-sm" type="button">
                <BaseIcon name="edit" />
              </button>

              <button type="button">
                <BaseIcon name="delete" />
              </button>
            </div>
          </div>

          <div class="q-pt-lg">
            <div class="q-mb-sm" style="font-size: 20px">Марина Кравец</div>

            <div class="q-mb-sm" style="color: #e61771">
              m.kravets@machta.kz
            </div>

            <div style="font-weight: 700">Менеджер</div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <ProfileForm />
      </div>
    </div>
  </div>
</template>
