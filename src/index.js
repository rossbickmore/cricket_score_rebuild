import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux'
import { scoreReducer, teamReducer, oversReducer} from './reducers/scoreReducer'

const reducer = combineReducers({
    teamBatting: teamReducer,
    scores: scoreReducer,
    overs: oversReducer,
})

const store = createStore(reducer)

const renderApp = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
