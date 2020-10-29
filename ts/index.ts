
import app from './App.js'
import router from './router/index.js'

new Vue({
    router,
    render: h =>h(app)
}).$mount('#app');