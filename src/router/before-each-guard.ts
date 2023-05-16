import type { Router } from 'vue-router'

export function beforeEachGuard(router: Router) {
  router.beforeEach((to, from) => {
    console.log('from:', from)
    console.log('to:', to)
    console.log('beforeEach')
  })
}
