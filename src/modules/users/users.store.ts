import { defineStore } from 'pinia'

interface Users {}

export const useUsersStore = defineStore('users', {
  state: (): Users => ({}),
  getters: {},
  actions: {},
  persist: true,
})
