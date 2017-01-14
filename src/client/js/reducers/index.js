import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import meta from './meta';
import slider from './slider'

const reducer = combineReducers({
  meta,
  slider,
  routing: routerReducer
});

export default reducer;
