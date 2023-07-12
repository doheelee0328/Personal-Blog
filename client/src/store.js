import { legacy_createStore as createStore } from 'redux'
import { userReducer } from './reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(userReducer, devToolsEnhancer())

export default store
