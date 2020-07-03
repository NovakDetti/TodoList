import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

//reducers
import * as reducers from './reducers';

export default combineReducers({
    ...reducers,
    router: routerReducer
})