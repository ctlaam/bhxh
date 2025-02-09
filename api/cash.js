import axios from 'axios'

const baseURL = process.env.BASE_URL ?? 'https://api.soatdonctv.online/api'

export function getLogCash(params) {
    let type = 'CashIn';
    let url = `${baseURL}/v1/user-transaction`
    if (params.type == 'CashOut') {
        type = 'CashOut'
    }
    url = url + '?type=' + type
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
