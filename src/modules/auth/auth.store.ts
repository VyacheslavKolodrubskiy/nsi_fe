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
    async sendValidatingCode(phone: string) {
      try {
        const { data } = await api.post('/profile/send_validating_code', {
          err_ne: false,
          phone,
        })

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
