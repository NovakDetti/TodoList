import { applyMiddleware, createStore } from 'redux';

// middleware
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;