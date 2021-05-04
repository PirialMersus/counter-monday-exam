import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './bll/store';

// function restoreState<T>(key: string, defaultState: T) {
//     let state = defaultState
//     const stateAsString = localStorage.getItem(key)
//     if (stateAsString !== null) state = JSON.parse(stateAsString) as T
//     return state
// }
// const state: StateType = restoreState<StateType>('minMaxValues', {min: 0, max: 5})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
