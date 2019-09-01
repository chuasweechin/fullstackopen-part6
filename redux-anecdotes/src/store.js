import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    message: notificationReducer,
    filter: filterReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store