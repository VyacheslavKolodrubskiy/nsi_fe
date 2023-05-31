import { defineStore } from 'pinia'

interface ProductGroupsState {}

export const useProductGroupsStore = defineStore('product-groups', {
  state: (): ProductGroupsState => ({}),
  getters: {},
  actions: {},
  persist: true,
})
