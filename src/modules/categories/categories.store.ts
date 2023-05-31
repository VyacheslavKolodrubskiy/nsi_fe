import { defineStore } from 'pinia'

interface CategoriesState {}

export const useCategoriesStore = defineStore('categories', {
  state: (): CategoriesState => ({}),
  getters: {},
  actions: {},
  persist: true,
})
