import axios from './config.js'


function filter (obj) {
  // 是否检验参数判断
  if (!obj['params_uncheck']) {
    Object.keys(obj).map(key => {
      if (obj[key] === '' || obj[key] === undefined || obj[key] === null) {
        delete obj[key]
      }
    })
  } else {
    delete obj['params_uncheck']
  }
  return obj
}
function dataTrim (data) {
  if (Array.isArray(data)) {
    for (let item of data) {
      if (typeof item === 'object') {
        this.dataTrim(item)
      } else if (typeof item === 'string') {
        item = item.trim()
      }
    }
  } else if (typeof data === 'object') {
    for (const key in data) {
      if (typeof data[key] === 'object') {
        this.dataTrim(data[key])
      } else if (typeof data[key] === 'string') {
        data[key] = data[key].trim()
      }
    }
  }
}
axios.interceptors.request.use(config => {
  console.log(config)
  config.params && filter(config.params)
  // 接口后面添加时间戳，解决在低版本浏览器上缓存接口的问题
  config.url = /\?/g.test(config.url) ? config.url + `&time=${+new Date()}` : config.url + `?time=${+new Date()}`
  // 全局去前后空格
  try {
    dataTrim(config.data)
    dataTrim(config.params)
  } catch (e) {
    console.log(e)
  }
  return config
})

axios.interceptors.response.use(response => {
  if (response.data.code === 200 || response.data.code === '200') return response.data
  else if (response.data.code === 1001 || response.data.code === '1001') {
    console.log(response.data.msg)
  } else if (response.data.code === -1) {
  } else return response.data
  console.warn(response.data.msg)
  return Promise.reject(response.data)
}, error => {
  console.log('error:', error)
  if (error.response) {
    // const errStatusCode = error.response.status
    // responseErrObj[errStatusCode]()
  }
  return Promise.reject(error)
})
