import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import {withExtraArgument} from 'redux-thunk'
import api from '../api.js'

const store = createStore(rootReducer, applyMiddleware(withExtraArgument(api)))

export default store
