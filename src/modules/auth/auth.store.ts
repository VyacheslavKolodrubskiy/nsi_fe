import { api } from 'boot/axios'
import { defineStore } from 'pinia'

interface Auth {
  token: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): Auth => ({
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token,
  },
  actions: {
    async fetchProfile() {
      try {
        const { data } = await api.get('/profile')

        console.log('data:', data)
      } catch (error) {
        console.error(error)
      }
    },
    setToken(token: string) {
      this.token = token
    },
    clearToken() {
      this.token = null
    },
  },
  persist: true,
})
