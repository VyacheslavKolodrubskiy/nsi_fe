import { defineStore } from 'pinia'

interface ProductGroups {}

export const useProductGroupsStore = defineStore('product-groups', {
  state: (): ProductGroups => ({}),
  getters: {},
  actions: {},
  persist: true,
})
