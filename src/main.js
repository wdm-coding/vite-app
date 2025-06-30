import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {throttle} from 'lodash-es'
console.log(throttle)
createApp(App).mount('#app')
