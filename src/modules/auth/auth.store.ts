import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export type Token = string | null

export interface AuthState {
  accessToken: Token
  refreshToken: Token
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: LocalStorage.getItem('accessToken') || null,
    refreshToken: LocalStorage.getItem('refreshToken') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
    getToken: (state) => state.accessToken || null,
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

        this.accessToken = data.access_token
        this.refreshToken = data.refresh_token

        return this.accessToken
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
          refresh_token: this.accessToken,
        })

        this.accessToken = data.access_token

        return this.accessToken
      } catch (error) {
        console.error(error)
      }
    },
    clearToken() {
      this.accessToken = null
      this.refreshToken = null
    },
  },
  persist: true,
})
