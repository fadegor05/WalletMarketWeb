import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            amount: null
        }
    }
})

export default store;