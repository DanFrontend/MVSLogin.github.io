import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

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