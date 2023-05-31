import { defineStore } from 'pinia'

interface CatalogState {}

export const useCatalogStore = defineStore('catalog', {
  state: (): CatalogState => ({}),
  getters: {},
  actions: {},
  persist: true,
})
