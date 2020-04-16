export default {
    namespaced: true,
    state: {
        updated: (new Date()).toLocaleTimeString(),
    },
    mutations: {
        setUpdated: function(state) {
            state.updated = (new Date()).toLocaleTimeString()
        }
    }
}