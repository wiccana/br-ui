import Vue from 'vue'
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'                           //icons
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primevue/resources/themes/saga-blue/theme.css'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import 'primeflex/primeflex.css'


Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Dropdown', Dropdown);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
