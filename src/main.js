import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { mdsComponents } from '@mosaic-design-system/components-vue/plugin/plugin.js'
import { mdsComponents } from '@mosaic-design-system/components-vue/plugin-async/plugin-async.js'
// import { mdsComponents } from '@mosaic-design-system/components-vue/plugin-optimized/plugin-optimized.js'
const app = createApp(App)
console.log('mdsComponents', mdsComponents)
app.use(mdsComponents);

app.use(router)
console.log('app', app)
app.mount('#app')
