import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const appReducer = combineReducers({
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default createStore(rootReducer, {}, applyMiddleware(thunk))
