import React, { useRef } from 'react';
import DadJoke from './DadJoke';
import './App.css';
import logo from './logo.png';

/* Thank ChatGPT for the majority of this code :) */

function App() {
  const jokeContainerRef = useRef(null);

  const scrollToRef = () => {
    if (jokeContainerRef.current) {
      jokeContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Floating resume button */}
      <a href="https://docs.leapit.us/resume-project/resume" target="_blank" rel="noopener noreferrer" className="Resume-button floating-button">
        View Resume
      </a>

      <header className="App-header">
        <h1><strong>Greetings!</strong></h1>
        <strong>
          <p>While there's not much to explore just yet, you're welcome to grab a dad joke from <u>below</u> or explore my docs site to learn how this page came to life.</p>
        </strong>
      </header>
      <div className="Logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="DadJoke" ref={jokeContainerRef}> {/* Add ref to the div */}
        <DadJoke scrollToRef={scrollToRef} jokeContainerRef={jokeContainerRef} />
      </div>
      <footer>
        <a href="https://docs.leapit.us" target="_blank" rel="noopener noreferrer" className="navigation-link">
          <span role="img" aria-label="Hand pointing right">👉</span>
          Check out my GitBook to see how this was built! 
          <span role="img" aria-label="Hand pointing left">👈</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
