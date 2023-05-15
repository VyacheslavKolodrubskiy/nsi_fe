import { api } from 'boot/axios'

export function useAxios() {
  async function request(url: string, config?: {}): Promise<any> {
    try {
      await api(url, config)
    } catch (error) {
      console.error(error)
    }
  }

  return {}
}
