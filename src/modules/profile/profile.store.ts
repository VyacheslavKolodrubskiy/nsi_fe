import { defineStore } from 'pinia'

interface Profile {}

export const useProfileStore = defineStore('profile', {
  state: (): Profile => ({}),
  getters: {},
  actions: {},
  persist: true,
})
