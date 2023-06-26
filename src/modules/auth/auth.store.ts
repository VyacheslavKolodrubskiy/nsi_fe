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
    async refreshAccessToken() {
      try {
        const { data } = await this.$api.post('/profile/auth/token', {
          refreshToken: this.refreshToken,
        })

        this.token = data.access_token
      } catch (error) {
        console.error(error)
      }
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
