let config = {}

if (process.env.NODE_ENV === 'prod') {
  config = {
    api: 'https://fangbao-api.yuexiuproperty.cn'
  }
} else if (process.env.NODE_ENV === 'dev') {
  config = {
    api: 'https://fangbao-test-api.yuexiuproperty.cn'
  }
} else if (process.env.NODE_ENV === 'pre') {
  config = {
    api: 'https://fangbao-test-api.yuexiuproperty.cn'
  }
} else if (process.env.NODE_ENV === 'test') {
  config = {
    api: 'https://fangbao-test-api.yuexiuproperty.cn'
  }
}
console.log(process.env.NODE_ENV)
export default config
