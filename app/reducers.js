import {combineReducers} from 'redux';

import multiLists from './multiListsView/multiListsReducer';

console.log(multiLists);
const combinedReducers = combineReducers({
    allLists: multiLists
});

export default combinedReducers;