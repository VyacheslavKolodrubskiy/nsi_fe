import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
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

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  responseType: 'json',
  timeout: RTO,
})

export default boot(({ app, store }) => {
  api.interceptors.request.use(
    async (
      config: InternalAxiosRequestConfig
    ): Promise<InternalAxiosRequestConfig> => {
      const token = useAuthStore().getToken

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    }
  )

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: any): Promise<AxiosInstance> => {
      const originalRequest = error.config
      const { refreshAccessToken } = useAuthStore()

      if (error.response.status === 401) {
        const token = await refreshAccessToken()

        if (token) {
          originalRequest.headers.Authorization = `Bearer ${token}`
        }

        return api(originalRequest)
      }

      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$api = api
  app.config.globalProperties.$axios = axios

  store.use(() => ({ $api: api }))
})
