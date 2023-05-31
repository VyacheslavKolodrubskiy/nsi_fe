import { defineStore } from 'pinia'

interface DashboardState {}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardState => ({}),
  getters: {},
  actions: {},
  persist: true,
})
