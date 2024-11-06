import axios from 'axios'
const baseURL = process.env.BASE_URL ?? 'https://api.soatdontienich.online/api'
export function logIn(data) {
  const url = `${baseURL}/v1/auth/login/`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status) {
          resolve(response.data.data)
        } else {
          reject(response)
        }
      })
      .catch((response) => {
        reject(response)
      })
  })
}

export function signUp(data) {
  const url = `${baseURL}/v1/auth/register`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status) {
          resolve(response.data.data)
        } else {
          reject(response)
        }
      })
      .catch((response) => {
        reject(response)
      })
  })
}
export function getDataUser(data){
  const url = `${baseURL}/v1/profile`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data
        },
      })
      .then((response) => {
        resolve(response.data);
      }).catch((response) => {
      reject(response);
    })
  });
}

export function getUserInfo(data) {
  const url = `${baseURL}/auth/get_info/`
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data,
        },
      })
      .then((response) => {
        if (response.status == 201) {
          resolve(response.data)
        } else {
          reject(response)
        }

      })
      .catch((response) => {
        reject(response)
      })
  })
}

export function updatePassword(data) {
  const url = `${baseURL}/v1/profile/password`
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status == 200) {
          resolve(response.data)
        } else {
          reject(response)
        }

      })
      .catch((response) => {
        reject(response)
      })
  })
}

