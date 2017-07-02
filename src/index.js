import React from 'react';
import ReactDOM from 'react-dom';
import TaskApp from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux'

import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <TaskApp />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();