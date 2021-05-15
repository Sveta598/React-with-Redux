/*import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import React from 'react';
import {render} from 'react-dom';
//import './index.css';
import {applyMiddleware, createStore} from 'redux'
//import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './redux/rootReducer'
import {forbiddenWordsMiddleware} from './redux/middleware'

const store = createStore(
  rootReducer, 
  //0,
  applyMiddleware(thunk, forbiddenWordsMiddleware)
)

/*const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))*/

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

render(app, document.getElementById('root'));

/*render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

