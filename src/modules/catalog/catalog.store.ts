import { defineStore } from 'pinia'

import { Catalog, CatalogResponse } from './catalog.models'

interface CatalogState {
  catalog: Catalog[]
  totalCount: number
}

export const useCatalogStore = defineStore('catalog', {
  state: (): CatalogState => ({
    catalog: [],
    totalCount: 0,
  }),
  getters: {
    getCatalog: (state) => state.catalog,
    getCatalogTotalCount: (state) => state.totalCount,
  },
  actions: {
    async fetchCatalog() {
      try {
        const { data } = await this.$api.get<CatalogResponse>('/nsi/product', {
          params: {
            page_size: 10,
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
