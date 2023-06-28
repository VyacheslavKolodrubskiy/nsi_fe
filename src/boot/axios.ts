import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { Notify } from 'quasar'
import { boot } from 'quasar/wrappers'
import { useAuthStore } from 'src/modules/auth/auth.store'
import { PageName } from 'src/shared/enums/common.enum'

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

export default boot(({ app, store, router }) => {
  api.interceptors.request.use(
    async (
      config: InternalAxiosRequestConfig
    ): Promise<InternalAxiosRequestConfig> => {
      const { accessToken } = useAuthStore()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    }
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      Notify.create({
        type: 'negative',
        message: `Сообщение ошибки: ${error.message}`,
      })

      const { accessToken, setAccessToken, clearTokens } = useAuthStore()
      const originalRequest = error.config

      if (error.response && error.response.status === 401) {
        if (!originalRequest._retry) {
          originalRequest._retry = true

          try {
            const { data } = await api.post('/account/profile/auth/token', {
              refresh_token: accessToken,
            })

            setAccessToken(data.access_token)
            originalRequest.headers.Authorization = `Bearer ${data.access_token}`

            return api(originalRequest)
          } catch (error) {
            console.error('Failed to refresh token:', error)

            clearTokens()
            router.push({ name: PageName.AUTH })
          }
        } else {
          console.error('Failed to refresh token after retrying:', error)
        }
      }

      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$api = api
  app.config.globalProperties.$axios = axios

  store.use(() => ({ $api: api }))
})
