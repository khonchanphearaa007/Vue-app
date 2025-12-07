// Import Tailwind CSS
import './assets/tailwind.css'
import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css' // import the styles CSS
import router from './router'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(Toast);

app.mount("#app");

