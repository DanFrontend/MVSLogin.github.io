import Vue from 'vue'
import Vuex from 'vuex'
import starwars from "./starwars";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{ starwars },
    state: {
        count: 0
    },
    mutations: {
        increment (state, payload) {
            state.count += payload
        },
        deincrement (state, payload) {
            state.count -= payload
        }
    },
    // actions: {
    //     incrementAction ({commit}, payload) {
    //         commit('increment', payload)
    //     },
    //     deincrementAction ({commit}, payload) {
    //         commit('deincrement', payload)
    //     }
    // },
    getters: {
        counter (state) {
            return state.count
        }
    }
})