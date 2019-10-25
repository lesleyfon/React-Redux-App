import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'
import App from './App';

import{ highlightsReducer } from './reducer.js/reducer'
import {highlightReducer as forHighlight} from './reducer.js/highlightReducer'

const root = combineReducers({highlightsReducer, forHighlight})

const store = createStore(root, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = {store }>
        <App />
    </Provider>,
     document.getElementById('root'));
