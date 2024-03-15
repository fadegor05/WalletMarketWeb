import { createStore } from 'vuex'
import currencies from './currencies.json'

const store = createStore({
    state() {
        return {
            amount: null,
            loading: false,
            currency: currencies.currencies[0],
            items: []
        }
    }
})

export default store;