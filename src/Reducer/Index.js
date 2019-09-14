import { combineReducers } from 'redux'
import CreateReducer from './CreateReducer'

const rootReducer = combineReducers({
    products:CreateReducer
})
export default rootReducer;