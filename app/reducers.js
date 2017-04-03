import {combineReducers} from 'redux';

import app from './reducers/categories';

//dont need this yet but will in the future
const combinedReducers = combineReducers({
    app
});

export default combinedReducers;