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
        await this.$api.post('/account/profile/send_validating_code', {
          err_ne: false,
          phone,
        })
      } catch (error) {
        console.error(error)
      }
    },
    async authenticateUser(phone: string, sms_code: number) {
      try {
        const { data } = await this.$api.post('/account/profile/auth', {
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
      this.clearTokens()

      try {
        await this.$api.post('/account/profile/logout')
      } catch (error) {
        console.error(error)
      }
    },
    setAccessToken(token: string) {
      this.accessToken = token
    },
    clearTokens() {
      this.accessToken = null
      this.refreshToken = null
    },
  },
  persist: true,
})
