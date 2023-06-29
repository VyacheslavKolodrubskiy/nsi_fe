import { defineStore } from 'pinia'

import { Catalog, CatalogResponse } from './catalog.models'

interface CatalogState {
  catalog: Catalog[]
  page: number
  totalCount: number
}

export const useCatalogStore = defineStore('catalog', {
  state: (): CatalogState => ({
    catalog: [],
    page: 1,
    totalCount: 0,
  }),
  getters: {
    getCatalog: (state) => state.catalog,
    getCatalogTotalCount: (state) => state.totalCount,
  },
  actions: {
    async fetchCatalog(page: number) {
      try {
        const { data } = await this.$api.get<CatalogResponse>('/nsi/product', {
          params: {
            page_size: 8,
            page,
          },
        })

        this.catalog = data.results
        this.totalCount = data.total_count
      } catch (error) {
        console.error(error)
      }
    },
  },
})
