import HelloWorld from '../components/HelloWorld.js'


const template = `
    <div class="home">
        <hello-world msg="Hola mundo desde mi plantilla"/>
        <h1>Mi contador con vuex:
        <span :style="colorContador">{{ contador }}</span>
        </h1>
        <button class="btn btn-success" @click="aumentar">Aumentar con mutacion</button>
        <button class="btn btn-danger" @click="disminuirAccion">Disminuir con actions</button>
    </div>
`;
const Home = Vue.component('home', {
    template,
    components: {
        HelloWorld,
    },
    methods: {
        ...Vuex.mapMutations(['aumentar']),
        ...Vuex.mapActions(['disminuirAccion']),
    },
    computed: {
        ...Vuex.mapState(['contador']),
        colorContador() {
            return this.contador >= 100 ? { 'color': 'green' } : { 'color': 'red' };
        },
    },
});
export default Home;