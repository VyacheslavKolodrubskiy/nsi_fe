import { defineStore } from 'pinia'

export interface AuthState {
  token: string | null
  refreshToken: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    refreshToken: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async sendValidationCode(phone: string) {
      try {
        await this.$api.post('/profile/send_validating_code', {
          err_ne: false,
          phone,
        })
      } catch (error) {
        console.error(error)
      }
    },
    async auth(phone: string, sms_code: number) {
      try {
        const { data } = await this.$api.post('/profile/auth', {
          sms_code,
          phone,
        })

        this.setToken(data.access_token, data.refresh_token)
      } catch (error) {
        console.error(error)
      }
    },
    async logout() {
      try {
        await this.$api.post('/profile/logout')
      } catch (error) {
        console.error(error)
      }
    },
    setNewAccessToken(token: string) {
      this.token = token
    },
    setToken(token: string, refreshToken: string) {
      this.token = token
      this.refreshToken = refreshToken
    },
    clearToken() {
      this.token = null
      this.refreshToken = null
      this.logout()
    },
  },
  persist: true,
})
