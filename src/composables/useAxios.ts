import { api } from 'boot/axios'

export function useAxios() {
  async function request(url: string, config?: {}): Promise<any> {
    try {
      const data = await api(url, config)
      console.log('data:', data)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    get: (url: string, config: {}) => request(url, config),
    post: (url: string, config: any) => request(url, config),
    put: (url: string, config: any) => request(url, config),
    patch: (url: string, config: any) => request(url, config),
    delete: (url: string, config: any) => request(url, config),
  }
}
