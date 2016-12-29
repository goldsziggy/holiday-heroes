import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import meta from './meta';

const reducer = combineReducers({
  meta,
  routing: routerReducer
});

export default reducer;
