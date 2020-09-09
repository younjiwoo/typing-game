import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
// import store from './store';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Game from './game';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/game" component={Game} />
      <Route component={Notfound} />
    </Switch>
  </Router>
)


const store = createStore(rootReducer, composeWithDevTools( ));
const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    {routing}
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
