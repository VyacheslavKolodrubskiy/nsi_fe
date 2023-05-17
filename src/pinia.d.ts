import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    testMe: () => void
  }
}
