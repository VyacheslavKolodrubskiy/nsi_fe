import { AxiosInstance } from 'axios'
import axios from 'axios'
import { Notify } from 'quasar'
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
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: RTO,
})

export default boot(({ app, store }) => {
  // api.interceptors.request.use((config) => {
  //   const token = store.state.auth.token

  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`
  //   }

  //   return config
  // })
  api.interceptors.response.use(
    (response) => response,
    (error = {}) => {
      Notify.create({
        type: 'negative',
        message: `Сообщение ошибки: ${error.response.data.error_code}, Код ошибки: ${error.response.status}`,
      })

      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$api = api
  app.config.globalProperties.$axios = axios

  store.use(() => ({ $api: api }))
})
