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

let refreshToken = ''

async function refreshAccessToken() {
  try {
    const response = await axios.post('https://api.example.com/refresh_token', {
      refreshToken: refreshToken,
    })

    const newAccessToken = response.data.access_token
    api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`

    if (response.data.refresh_token) {
      refreshToken = response.data.refresh_token
    }

    return api(response.config)
  } catch (error) {
    console.error('Error refreshing token:', error)
    throw error
  }
}

export default boot(({ app, store }) => {
  const { token, refreshToken } = useAuthStore()
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
        // return refreshToken()
      }

      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$api = api
  app.config.globalProperties.$axios = axios

  store.use(() => ({ $api: api }))
})
