import Cookies from 'js-cookie'
// middleware/auth.js

export default async function ({ store, redirect, route }) {
  const accessToken = Cookies.get('access_token')
  if (accessToken) {
    await store.dispatch('auth/login', {
      accessToken,
    })
  }
  const isAuthenticated = store.state.auth.isAuthenticated
  // Nếu trạng thái isAuthenticated là false và route khác /auth và /auth/login
  if (
    !isAuthenticated && route.path !== '/login/' && !route.path.includes('signup') && route.path !== '/'
  ) {
    // Chuyển hướng đến /auth/signup
    return redirect('/login/')
  }
}
