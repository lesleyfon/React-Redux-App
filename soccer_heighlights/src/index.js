import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './App';

import{ highlightsReducer } from './reducer.js/reducer'

const store = createStore(highlightsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store = {store }>
        <App />
    </Provider>,
     document.getElementById('root'));
