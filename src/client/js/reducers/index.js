import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import meta from './meta';
import slider from './slider'
import service from './service';

const reducer = combineReducers({
  meta,
  slider,
  service,
  routing: routerReducer
});

export default reducer;
