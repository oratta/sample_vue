export default {
    state: {
        updated: (new Date()).toTimeString(),
    },
    mutations: {
        setUpdated: function(state){
            state.updated = (new Date()).toTimeString();
        }
    },
    getters: {
        localUpdated: function(state){
            return state.updated;
        }
    }
}