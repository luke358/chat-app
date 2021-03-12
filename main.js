import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'
uni.$on('openAudio',res => {
	console.log(res)
})
const app = new Vue({
	store,
    ...App
})
app.$mount()
