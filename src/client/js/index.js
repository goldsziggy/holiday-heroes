import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
import Wrapper from './components/Wrapper';
import styles from '../scss/index.scss';
// import {persistStore} from 'redux-persist';

const state = window.__STATE;
const store = configureStore(state);
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Wrapper} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
