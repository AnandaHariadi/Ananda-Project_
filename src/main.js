import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerDirectives } from './directives.js'

const app = createApp(App)
registerDirectives(app)
app.mount('#app')
