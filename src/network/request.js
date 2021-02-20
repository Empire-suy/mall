import axios from 'axios'

const request = function (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000'
  })

  instance.interceptors.request.use(config => {
    console.log('request interceptor')
    return config
  }, err => {
    console.log('request fail interceptor')
    return err
  })

  instance.interceptors.response.use(res => {
    console.log(res.data)
    return {
      code: res.status,
      data: res.data.data
    }
  }, err => {
    console.log('response error interceptor', err)
    return err
  })

  return instance(config)
}


export default request
