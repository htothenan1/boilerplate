import { Provider } from 'react-redux';
import store from './store'
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store = {store}>
    <div>Yes, I got it to work!</div>
    </Provider>,
    document.getElementById('app')
);
