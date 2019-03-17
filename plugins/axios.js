import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
Vue.axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8'
Vue.axios.defaults.headers.patch['Content-Type'] = 'application/json;charset=UTF-8'