import { legacy_createStore as createStore, combineReducers } from 'redux'
import { userReducer, tokenReducer } from './reducer'
// import { devToolsEnhancer } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
})

const store = createStore(rootReducer)
export default store
