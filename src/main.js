import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Vue from 'vue'

import App from './App.vue'

import 'primeflex/primeflex.css'
//core css
import 'primeicons/primeicons.css'
//icons
import 'primevue/resources/primevue.min.css'
//Ajax calls
// import axios from 'axios'
// import VueAxios from 'vue-axios'

//PrimeFaces
import 'primevue/resources/themes/saga-blue/theme.css'
//icons
import 'primevue/resources/themes/saga-blue/theme.css'

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Dropdown', Dropdown);
// Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
