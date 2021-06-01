import axios from 'axios'

var generalHeaders = {
  Authorization: 'Bearer ' + localStorage.getItem('access_token'),
  'Content-Type': 'application/json'
}

let api = axios.create()

api.interceptors.request.use(
  function(config) {
    config.headers = { ...config.headers, ...generalHeaders }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default api
