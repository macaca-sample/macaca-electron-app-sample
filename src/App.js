import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Macaca + react 环境
        </p>
        <a id="macacaId"
          href="https://macacajs.github.io/zh/"
          rel="noopener noreferrer"
        >
          Learn Macaca
        </a>
        <a id="reactId"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <div>
        <input placeholder='Macaca'></input>
      </div>
    </div>
  );
}

export default App;
