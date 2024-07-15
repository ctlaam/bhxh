import axios from 'axios'

const baseURL = process.env.BASE_URL ?? 'https://api.vietnamtour.pro/api'


export function takeOrder(level) {
  const url = `${baseURL}/v2/user-order/${level}/process`
  return new Promise((resolve, reject) => {
    axios
      .put(url, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((response) => {
        reject(response.response.data.message)
      })
  })
}

export function getListOrder(params) {
  const url = `${baseURL}/v1/user-order`
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((response) => {
        reject(response.response.data.message)
      })
  })
}

export function sendOrderProduct(data) {
  const url = `${baseURL}/v2/user-order/${data}/purchase`
  return new Promise((resolve, reject) => {
    axios
      .put(url, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((response) => {
        reject(response.response.data.message)
      })
  })
}
export function getOrderAnalytic() {
  const url = `${baseURL}/v1/profile/analytic`
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((response) => {
        reject(response.response.data.message)
      })
  })
}
