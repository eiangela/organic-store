// import './assets/main.css'
import vuetify from './plugins/vuetify'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).use(vuetify).mount('#app')
