import axios from 'axios'
const baseURL = process.env.BASE_URL ?? 'https://api.soatdonctv.online/api'
import Cookies from 'js-cookie'
// Helper function để lấy token từ localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem('token')
  const token2 = Cookies.get('access_token')
  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token ?? token2}` : ''
  }
}

// Auth APIs
export function register(data) {
  const url = `${baseURL}/auth/register`
  return axios.post(url, data, {
    headers: { 'Content-Type': 'application/json' }
  })
}

export function login(data) {
  const url = `${baseURL}/auth/login`
  return axios.post(url, data, {
    headers: { 'Content-Type': 'application/json' }
  })
}

export function getProfile() {
  const url = `${baseURL}/profile`
  return axios.get(url, { headers: getAuthHeaders() })
}

// User APIs
export function getUsers() {
  const url = `${baseURL}/users`
  return axios.get(url)
}

export function getUsersFull() {
  const url = `${baseURL}/users/full`
  return axios.get(url)
}

export function getUserByName(name) {
  const url = `${baseURL}/users/by-name/${encodeURIComponent(name)}`
  return axios.get(url)
}

// Friend APIs
export function getFriendList() {
  const url = `${baseURL}/friend/list`
  return axios.get(url, { headers: getAuthHeaders() })
}

export function addFriend(friendId) {
  const url = `${baseURL}/friend/add`
  return axios.post(url, { friendId }, { headers: getAuthHeaders() })
}

export function removeFriend(friendId) {
  const url = `${baseURL}/friend/remove`
  return axios.post(url, { friendId }, { headers: getAuthHeaders() })
}

export function getFriendRequests() {
  const url = `${baseURL}/friend/requests`
  return axios.get(url, { headers: getAuthHeaders() })
}

export function acceptFriendRequest(fromId) {
  const url = `${baseURL}/friend/accept`
  return axios.post(url, { fromId }, { headers: getAuthHeaders() })
}

export function declineFriendRequest(fromId) {
  const url = `${baseURL}/friend/decline`
  return axios.post(url, { fromId }, { headers: getAuthHeaders() })
}

export function cancelFriendRequest(toId) {
  const url = `${baseURL}/friend/cancel`
  return axios.post(url, { toId }, { headers: getAuthHeaders() })
}

// Block APIs
export function getBlockList() {
  const url = `${baseURL}/block/list`
  return axios.get(url, { headers: getAuthHeaders() })
}

export function getConversations() {
  const url = `${baseURL}/conversations`
  return axios.get(url, { headers: getAuthHeaders() })
}

export function addBlock(targetId) {
  const url = `${baseURL}/block/add`
  return axios.post(url, { targetId }, { headers: getAuthHeaders() })
}

export function removeBlock(targetId) {
  const url = `${baseURL}/block/remove`
  return axios.post(url, { targetId }, { headers: getAuthHeaders() })
}

// Group APIs
export function getGroups() {
  const url = `${baseURL}/groups`
  return axios.get(url)
}

// Setup API
export function resetSeed() {
  const url = `${baseURL}/setup/reset`
  return axios.post(url)
}

export function searchUsers(query) {
  const url = `${baseURL}/users/search?q=${query}&limit=100`
  return axios.get(url)
}

export function uploadImage(data) {
  const url = `${baseURL}/upload`
  console.log("url:", url)
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
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