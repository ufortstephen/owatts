import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
// import axios from 'axios'
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import VueCarousel from 'vue-carousel'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'

const app = createApp(App)
app.use(store)
app.use(VueCarousel)
// app.use(axios)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)

app.use(moshaToast)
app.mount('#app')
