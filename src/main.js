import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import phoneDirective from './directives/phoneDirective'

const app = createApp(App)

app.use(router)
app.directive('phone', phoneDirective)

app.mount('#app')
