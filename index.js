import React from 'react';
import {render} from 'react-dom';

import Redux from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';
import store from './redux/store/config';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
