import console from 'console'
import { defineStore } from 'pinia'

import { Catalog, CatalogFilters, CatalogResponse } from './catalog.interfaces'

interface CatalogState {
  catalog: Catalog[]
  totalCount: number
}

export const useCatalogStore = defineStore('catalog', {
  state: (): CatalogState => ({
    catalog: [],
    totalCount: 0,
  }),
  getters: {},
  actions: {
    async fetchCatalog({ rowsNumber, ...filters }: CatalogFilters) {
      try {
        const { data } = await this.$api.get<CatalogResponse>('/nsi/product', {
          params: { ...filters, with_total_count: true },
        })

        this.catalog = data.results
        this.totalCount = data.total_count
      } catch (error) {
        console.error(error)
      }
    },
  },
})
