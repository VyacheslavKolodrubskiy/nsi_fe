import { defineStore } from 'pinia'

interface Categories {}

export const useCategoriesStore = defineStore('categories', {
  state: (): Categories => ({}),
  getters: {},
  actions: {},
  persist: true,
})
