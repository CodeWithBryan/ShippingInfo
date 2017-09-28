import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AppRoute from 'src/App/Route';
import configureStore from 'src/Redux/store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDom.render((
  <Provider store={store}>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
