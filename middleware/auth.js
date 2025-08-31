
// middleware/auth.js
export default async function ({ store, redirect, route }) {
  // lấy user từ localStorage
  let user = null
  if (process.client) {
    try {
      user = JSON.parse(localStorage.getItem('user'))
    } catch (e) {
      user = null
    }
  }

  // route public (không cần login)
  const publicRoutes = ['/', '/chon-dang-ky', '/dang-ky']
  console.log(route.path)
  // nếu route hiện tại không phải public & cũng không phải trang login
  if (!publicRoutes.includes(route.path) && !user) {
    // chưa login thì redirect sang trang chủ
    return redirect('/')
  }
}
