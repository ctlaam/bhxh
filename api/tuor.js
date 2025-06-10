import axios from 'axios'

const baseURL = process.env.BASE_URL ?? 'https://api.tienichctv.com/api'


export function getTuor() {
  const url = `${baseURL}/v2/user-order/get-tour`
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

export function sendTuor(orderId) {
  const url = `${baseURL}/v2/user-order/${orderId}/purchase-tour`
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
