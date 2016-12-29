import  {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';


const middleware = [thunk];

export default (initialState = {}) => {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware)
  ))
  return store;
}
