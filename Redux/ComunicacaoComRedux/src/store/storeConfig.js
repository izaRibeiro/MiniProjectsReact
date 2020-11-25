import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numeros: function(state, action) {
        console.log(state, '', action);
        return {
            min: 9,
            max: 3
        }
    },
    nomes: function(state, action) {
        return [
            'Fulana',
            'Fulano'
        ]
    }
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig