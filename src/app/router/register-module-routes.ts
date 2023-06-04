import { Router } from 'vue-router'

const modules = import.meta.globEager('modules/**/*index.ts')

export function registerModuleRoutes(router: Router) {
  for (const moduleKey in modules) {
    const module = modules[moduleKey]

    if (module.router) {
      module.router(router)
    }
  }
}
