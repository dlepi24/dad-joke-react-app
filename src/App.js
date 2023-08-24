import React from 'react';
import DadJoke from './DadJoke';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><strong>Welcome!</strong></h1>
        <strong><p>There's not much to do here yet, but feel free to fetch a dad joke or check out my docs site to see how this page was created.</p></strong>
      </header>
      <div className="Logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <DadJoke />
      <footer>
        <a href="https://info.leapit.us" target="_blank" rel="noopener noreferrer">
          Check out my Docs website to see how this was built!
        </a>
      </footer>
    </div>
  );
}

export default App;