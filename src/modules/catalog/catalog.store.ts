import { defineStore } from 'pinia'

interface Catalog {}

export const useCatalogStore = defineStore('catalog', {
  state: (): Catalog => ({}),
  getters: {},
  actions: {},
  persist: true,
})
