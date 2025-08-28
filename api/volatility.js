import axios from 'axios'
const baseURL = process.env.BASE_URL ?? 'https://api.soatdonctv.online/api'
import Cookies from 'js-cookie'


export function getBillInfo(namebank) {
  const url = `${baseURL}/api/${namebank}/bill_info/`
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


export function listBankChange(namebank) {
  const url = `${baseURL}/api/${namebank}/bank_change/`
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


export function getPhoto(namebank, data) {
  const url = `${baseURL}/api/${namebank}/change/`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
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
export function recharge(data) {
  const url = `${baseURL}/v1/profile/bank`
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, {
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

export function getProfileUser() {
  const url = `${baseURL}/profile`
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

export function cashOut(data) {
  const url = `${baseURL}/v1/user-transaction`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
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
export function cashIn(data) {
  const url = `${baseURL}/v1/user-transaction`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
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

export function getListBank() {
  const url = `${baseURL}/v1/methob`
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

export function getListVips(key) {
  const url = `${baseURL}/v1/level/${key}`;
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
export function getListLevel() {
  const url = `${baseURL}/v1/level`;
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
export function historyWithDraw() {
  const url = `${baseURL}/v1/user-transaction`;
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
export function updateAddress(body) {
  const url = `${baseURL}/v1/profile/address`;
  return new Promise((resolve, reject) => {
    axios
      .put(url, body, {
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
