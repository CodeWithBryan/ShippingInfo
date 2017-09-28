import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AppRoute from 'src/App/Route';

ReactDom.render((
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
), document.getElementById('app'));
