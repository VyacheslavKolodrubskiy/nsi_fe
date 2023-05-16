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
    setToken(token: string) {
      this.token = token
    },
    clearToken() {
      this.token = null
    },
  },
})
