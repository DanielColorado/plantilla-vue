Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 300
    },
    mutations: {
        aumentar(state) {
            state.contador += 10;
        },
        disminuir(state) {
            state.contador -= 10;
        }
    },
    actions: {
        disminuirAccion({ commit }) {
            commit('disminuir');
        }
    },
    modules: {}
})