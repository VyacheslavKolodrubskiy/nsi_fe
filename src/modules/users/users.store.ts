import { defineStore } from 'pinia'

interface UsersState {}

export const useUsersStore = defineStore('users', {
  state: (): UsersState => ({}),
  getters: {},
  actions: {},
  persist: true,
})
