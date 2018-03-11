
import createReducer, { addVoteReducer } from './reducers/anecdoteReducer'
import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
  create: createReducer,
  vote: addVoteReducer
})

const store = createStore(reducer)

console.log(store.getState)

export default store