import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://610f66b8c848c900171b38be.mockapi.io/api/interview-demo/',
  timeout: 10000,
  withCredentials: true,
})

export default instance
