
import App from './App.vue'
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

import axios from 'axios'
Vue.use(Avue,{axios})

Vue.use(ElementUI)
Vue.use(Avue);

new Vue({render:h=>h(App)}).$mount('#app')
