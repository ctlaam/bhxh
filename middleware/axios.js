import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment'

export default async function ({ store }) {

  // Đăng ký một interceptor onRequest để thực hiện tác vụ trước khi gọi API
  // /plugins/axios.js
  axios.interceptors.request.use(
    async (config) => {
      const excludedEndpoints = [
        '/auth',
        '/auth/login',
      ]
      if (
        config.url.includes('/auth/token/refresh')
      ) {
        return config
      }
      const timeValid = Cookies.get('time_valid')
      let givenTime = null
      if (timeValid) {
        givenTime = moment(timeValid);
      }
      const token = store.state.auth.accessToken
      // Nếu tồn tại Bearer Token, thêm vào tiêu đề "Authorization" của yêu cầu Axios
      if (
        config.url.includes('/auth/get_info/') || !excludedEndpoints.some((endpoint) => config.url.includes(endpoint))
      ) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // Trả về config đã được cập nhật
      return config

    },
    async (error) => {
      console.log(error, 'error');
      return Promise.reject(error)
    }
  )
}
