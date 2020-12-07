import config from '../config'
import Axios from 'axios'
// import mockerWrap from '../mock'
console.log(config)

export default Axios.create({
  baseURL: config.api,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 60000
})


