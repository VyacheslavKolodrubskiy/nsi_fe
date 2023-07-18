import { defineStore } from 'pinia'

import { Category, CategoryResponse } from './categories.interfaces'

interface CategoriesState {
  categories: Category[]
  totalCount: number
}

export const useCategoriesStore = defineStore('categories', {
  state: (): CategoriesState => ({
    categories: [],
    totalCount: 0,
  }),
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
    async fetchCategory(id: string) {
      try {
        const { data } = await this.$api.get<CategoryResponse>(
          `/nsi/product_category/${id}`
        )

        console.log('data:', data)
      } catch (error) {
        console.error(error)
      }
    },
    async createCategory(category: Category) {
      try {
        const {
          data: { id },
        } = await this.$api.post<{ id: string }>(
          '/nsi/product_category',
          category
        )

        return id
      } catch (error) {
        console.error(error)
      }
    },
  },
})
