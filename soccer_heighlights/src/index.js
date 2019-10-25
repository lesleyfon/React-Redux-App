import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import App from './App';

import{ heighlightsReducer } from './reducer.js/reducer'

const store = createStore(heighlightsReducer);
ReactDOM.render(
    <Provider store = {store }>
        <App />
    </Provider>,
     document.getElementById('root'));
