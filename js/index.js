import app from './App.js';
import router from './router/index.js';
import store from './store/index.js';
new Vue({
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(app)
}).$mount('#app');