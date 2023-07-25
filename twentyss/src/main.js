import { createApp } from 'vue'
import { sync } from 'vuex-router-sync'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import {store} from './store/storeToken'
import '../src/interceptor/axios'
const unsync=sync(store,router)
unsync()

import { createMetaManager } from 'vue-meta';
const metaManager = createMetaManager();

createApp(App).use(metaManager).use(router).use(store).mount('#app')