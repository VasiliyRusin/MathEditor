import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedId: null,
        data: '',
    },
    mutations: {
        UPDATE_SELECTED_ID (state, value) {
            state.selectedId = value
        },
        ADD_DATA (state, id) {
            Vue.set(state.data, `id${id}`, [])
        },
        UPDATE_DATA (state, value) {
            state.data = value
        },
        REMOVE_DATA (state, id) {
            Vue.delete(state.data, id);
        },
        UPDATE_SELECTED_DATA (state, value) {
            Vue.set(state.data, state.selectedId, value)
        },
        ADD_SELECTED_DATA_MESSAGE (state) {
            state.data[state.selectedId].push('')
        },
        UPDATE_SELECTED_DATA_MESSAGE (state, {index, value}) {
            Vue.set(state.data[state.selectedId], index, value)
        },
        REMOVE_SELECTED_DATA_MESSAGE (state, index) {
            state.data[state.selectedId].splice(index, 1)
        }
    },
    actions: {
        addData ({state, commit}) {
            let max_id = Math.max(...Object.keys(state.data).map((key) => {
                return parseInt(key.replace('id', ''))
            }));

            commit('ADD_DATA', ++max_id);
        }
    },
    getters: {
        selectedId (state) {
            return state.data[state.selectedId] == null ? null : state.selectedId;
        },

        data (state) {
            return state.data;
        },

        selectedData (state) {
            return state.data[state.selectedId];
        }
    }
});
