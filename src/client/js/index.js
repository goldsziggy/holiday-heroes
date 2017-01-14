import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ServicePage from './components/ServicePage'
import styles from '../scss/index.scss';

const state = window.__STATE;
const store = configureStore(state);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={HomePage} />
      <Route path='/home' component={HomePage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/service' component={ServicePage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
