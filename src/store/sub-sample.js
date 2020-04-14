export default {
    state: {
        updated: (new Date()).toLocaleTimeString(),
    },
    mutations: {
        setUpdated: function(state) {
            state.updated = (new Date()).toLocaleTimeString()
        }
    }
}