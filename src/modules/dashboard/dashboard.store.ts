import { defineStore } from 'pinia'

interface Dashboard {}

export const useDashboardStore = defineStore('dashboard', {
  state: (): Dashboard => ({}),
  getters: {},
  actions: {},
  persist: true,
})
