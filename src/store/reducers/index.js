import counter from './counter'
import isLogged from './isLogged'
import {combineReducers} from 'redux';

const misReducers = combineReducers({
    count: counter,
    log: isLogged
})

export default misReducers;