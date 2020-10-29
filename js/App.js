const app = Vue.component('app', {
    template: `
    <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
    `
});
export default app;