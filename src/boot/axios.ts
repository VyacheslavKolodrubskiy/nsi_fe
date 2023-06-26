import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import axios from 'axios'
import { boot } from 'quasar/wrappers'

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
  async function refreshAccessToken(error: AxiosError): Promise<AxiosResponse> {
    try {
      const { data } = await api.post('/profile/auth/token', {
        refresh_token: localStorage.getItem('refreshToken'),
      })

      localStorage.setItem('token', data.access_token)

      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.access_token}`

      const originalRequest = error.config as AxiosRequestConfig
      originalRequest.headers = originalRequest.headers || {}
      originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`

      return api(originalRequest)
    } catch (error) {
      throw error
    }
  }

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })
  api.interceptors.response.use(
    (response) => response,
    async (error = {}) => {
      if (error.response.status === 401) {
        return await refreshAccessToken(error)
      }

      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$api = api
  app.config.globalProperties.$axios = axios

  store.use(() => ({ $api: api }))
})
