import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import scoreReducer from './reducers/scoreReducer'

const store = createStore(scoreReducer)

const renderApp = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
