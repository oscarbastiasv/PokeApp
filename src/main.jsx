import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { pokemonsReducer } from './Reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './Middlewares';
//import 'antd/dist/reset.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhacers = composeAlt(applyMiddleware(thunk, logger));

const store =  createStore(pokemonsReducer,composedEnhacers);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
)

