import React, { useRef } from 'react';
import DadJoke from './DadJoke';
import './App.css';
import logo from './logo.png';

function App() {
  const jokeContainerRef = useRef(null);

  const scrollToRef = () => {
    if (jokeContainerRef.current) {
      jokeContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><strong>Welcome!</strong></h1>
        <strong>
          <p>There's not much to do here yet, but feel free to fetch a dad joke or check out my docs site to see how this page was created.</p>
        </strong>
      </header>
      <div className="Logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="DadJoke" ref={jokeContainerRef}> {/* Add ref to the div */}
        <DadJoke scrollToRef={scrollToRef} jokeContainerRef={jokeContainerRef} />
      </div>
      <footer>
        <a href="https://info.leapit.us" target="_blank" rel="noopener noreferrer" className="navigation-link">
          <span role="img" aria-label="Hand pointing right">👉</span>
          Check out my GitBook to see how this was built! 
          <span role="img" aria-label="Hand pointing left">👈</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
