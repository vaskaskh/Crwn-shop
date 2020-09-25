import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './components/Redux/reducers/rootReducer';





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,logger)))


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)
