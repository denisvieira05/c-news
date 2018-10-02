import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import HomeReducer from '../modules/home/HomeReducer'
import AuthenticationReducer from '../modules/authentication/AuthenticationReducer'

const appReducer = combineReducers({
    home: HomeReducer,
    authentication: AuthenticationReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default createStore(rootReducer, {}, applyMiddleware(thunk))
