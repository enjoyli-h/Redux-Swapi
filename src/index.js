import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import starWarsReducer from './reducers';

const store = createStore(starWarsReducer/* rootReducer */, applyMiddleware/* applyMiddleware goes here */);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
