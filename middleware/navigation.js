
export default function ({ store }) {

store.app.router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.users.token === '') {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (store.state.users.token === '') {
      next()
    } else {
      next({ name: 'UserList' })
    }
  } else {
    next()
  }
})}