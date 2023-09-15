import React, { useRef } from 'react';
import DadJoke from './DadJoke';
import './App.css';

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
        <strong>
          <p>Our site is under construction. Click below for a dad joke while you wait...</p>
        </strong>
      </header>

      <div className="DadJoke" ref={jokeContainerRef}>
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