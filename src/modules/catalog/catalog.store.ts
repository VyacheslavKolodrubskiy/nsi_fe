import { defineStore } from 'pinia'

interface CatalogState {}

export const useCatalogStore = defineStore('catalog', {
  state: (): CatalogState => ({}),
  getters: {},
  actions: {
    async fetchProducts() {
      try {
        const { data } = await this.$api.get('/product')
        console.log('data:', data)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
