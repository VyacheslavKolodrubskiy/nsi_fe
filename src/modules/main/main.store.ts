import { defineStore } from 'pinia'

interface MainState {}

export const useAuthStore = defineStore('main', {
  state: (): MainState => ({}),
  getters: {},
  actions: {},
  persist: true,
})
