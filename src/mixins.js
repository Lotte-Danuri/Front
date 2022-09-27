import axios from 'axios'

axios.defaults.baseURL = 'http://43.201.18.146'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export default {
  methods: {
    async $api (url, method, data) {
      return (await axios({
        method: 'post',
        url,
        data
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}
