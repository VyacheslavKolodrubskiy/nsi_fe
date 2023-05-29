import type { Router } from 'vue-router'

export function beforeEachGuard(router: Router) {
  router.beforeEach((to, _, next) => {
    // const authStore = useAuthStore()

    // if (!authStore.isAuthenticated && to.name !== PageName.AUTH) {
    //   next({ name: PageName.AUTH })
    // } else if (authStore.isAuthenticated && to.name === PageName.AUTH) {
    //   next({ name: PageName.MAIN })
    // } else {
    //   next()
    // }
    next()
  })
}
