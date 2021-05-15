//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
        <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
