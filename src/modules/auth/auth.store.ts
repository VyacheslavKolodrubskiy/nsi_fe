import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export type Token = string | null

export interface AuthState {
  token: Token
  refreshToken: Token
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: LocalStorage.getItem('token') || null,
    refreshToken: LocalStorage.getItem('refreshToken') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token || null,
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

        this.token = data.access_token
        this.refreshToken = data.refresh_token

        return this.token
      } catch (error) {
        console.error(error)
      }
    },
    async logout() {
      try {
        await this.$api.post('/profile/logout')

        this.clearToken()
      } catch (error) {
        console.error(error)
      }
    },
    async refreshAccessToken() {
      try {
        const { data } = await this.$api.post('/profile/auth/token', {
          refresh_token: this.token,
        })

        this.token = data.access_token

        return this.token
      } catch (error) {
        console.error(error)
      }
    },
    clearToken() {
      this.token = null
      this.refreshToken = null
    },
  },
  persist: true,
})
