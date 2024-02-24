import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            amount: null,
            loading: false,
            items: []
        }
    }
})

export default store;