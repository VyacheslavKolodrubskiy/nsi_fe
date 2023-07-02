import { defineStore } from 'pinia'

import { Category } from './categories.interfaces'

interface CategoriesState {
  categories: Category[]
  page: number
  totalCount: number
}

export const useCategoriesStore = defineStore('categories', {
  state: (): CategoriesState => ({
    categories: [],
    page: 1,
    totalCount: 0,
  }),
  getters: {},
  actions: {
    async fetchCategories(page: number) {
      try {
        const { data } = await this.$api.get('/nsi/product_category', {
          params: {
            page_size: 8,
            page,
          },
        })

        this.categories = data.results
        this.totalCount = data.total_count
      } catch (error) {
        console.error(error)
      }
    },
  },
})
