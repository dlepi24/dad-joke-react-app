import React, { useState, useEffect } from 'react';
import './DadJoke.css';

function DadJoke({ scrollToRef, jokeContainerRef }) {
  const [joke, setJoke] = useState('');
  const [showJoke, setShowJoke] = useState(false);

  const fetchJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setJoke(data.joke);
    setShowJoke(true);
  };

  // Scroll to the joke container when the joke updates
  useEffect(() => {
    if (showJoke && jokeContainerRef.current) {
      jokeContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [joke, showJoke, jokeContainerRef]);

  return (
    <div className="DadJoke">
      {showJoke && (
        <div className="Joke-container" ref={jokeContainerRef}>
          <p><strong>{joke}</strong></p>
        </div>
      )}
      <button className="Joke-button" onClick={fetchJoke}>
        <strong>{joke ? 'Another one?' : 'Click Here!'}</strong>
      </button>
    </div>
  );
}

export default DadJoke;