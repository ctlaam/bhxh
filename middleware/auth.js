import Cookies from 'js-cookie'
// middleware/auth.js
import * as volatilityApi from '../api/volatility'
import * as authApi from '../api/auth.js'
export default async function ({ store, redirect, route }) {
  const accessToken = Cookies.get('access_token')
  if (accessToken) {
    await store.dispatch('auth/login', {
      accessToken,
    })
  }
  let isAuthenticated = store.state.auth.isAuthenticated
  console.log(route.path);
  if (!(route.path === '/login/' || route.path === '/login/signup' || route.path === '/login/signup/' || route.path === '/')) {
    await authApi.getDataUser(accessToken).then(async (response) => {
      await store.dispatch('profile/saveProfile', response.data)
    }).catch((error) => {
      isAuthenticated = false;
      store.dispatch('auth/login', {
        accessToken: null,
      })
    })
  }
  // Nếu trạng thái isAuthenticated là false và route khác /auth và /auth/login
  if (
    !isAuthenticated && route.path !== '/login/' && !route.path.includes('/my/rules') && !route.path.includes('rule') && route.path !== '/'
  ) {
    // Chuyển hướng đến /auth/signup
    return redirect('/login/')
  }
}
