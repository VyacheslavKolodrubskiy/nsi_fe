import { defineStore } from 'pinia'

interface ProfileState {}

export const useProfileStore = defineStore('profile', {
  state: (): ProfileState => ({}),
  getters: {},
  actions: {},
  persist: true,
})
