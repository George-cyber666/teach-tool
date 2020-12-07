import axios from './config.js'
import './interceptors'

export default {
  registFromYx (params) {
    return axios.get(`/um/applet/agent-info/yxh/${params.openId}/${params.unionId}`)
  }
}