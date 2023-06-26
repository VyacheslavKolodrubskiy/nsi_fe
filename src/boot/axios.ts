import { AxiosInstance } from 'axios'
import axios from 'axios'
import console from 'console'
import { boot } from 'quasar/wrappers'
import { useAuthStore } from 'src/modules/auth/auth.store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const RTO = 30000

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  responseType: 'json',
  timeout: RTO,
})

export default boot(({ app, store }) => {
  const { token, refreshToken, setNewAccessToken } = useAuthStore()

  async function refreshAccessToken() {
    try {
      const { data } = await api.post('/profile/auth/token', {
        refresh_token: refreshToken,
      })

      const newAccessToken = data.access_token
      api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`

      if (newAccessToken) {
        setNewAccessToken(newAccessToken)
      }
    } catch (error) {
      console.error('Error refreshing token:', error)
      throw error
    }
  }

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  api.interceptors.response.use(
    (response) => response,
    (error = {}) => {
      if (error.response.status === 401) {
        // return refreshAccessToken()
      }

      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$api = api
  app.config.globalProperties.$axios = axios

  store.use(() => ({ $api: api }))
})
