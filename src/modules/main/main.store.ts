import { defineStore } from 'pinia'

interface AuthState {
  token: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async sendValidatingCode(phone: string) {
      try {
        await this.$api.post('/profile/send_validating_code', {
          err_ne: false,
          phone,
        })
      } catch (error) {
        console.error(error)
      }
    },
    async auth(phone: string, sms_code: string) {
      try {
        await this.$api.post('/profile/auth', {
          sms_code,
          phone,
        })
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
