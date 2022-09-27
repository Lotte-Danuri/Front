import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

createApp(App).use(store).use(router).mixin(mixins).mount('#app')

// const cors = require('cors')

// const corsOption = {
//   origin: 'http://localhost:8080',
//   credentials: true
// }

// createApp(App).use(cors(corsOption))
