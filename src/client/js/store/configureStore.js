import  {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';


const middleware = [thunk];

export default (initialState = {}, isBrowser=true) => {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware),
    isBrowser ? window.devToolsExtension() : f => f
  ))
  return store;
}
