import React, { useState, useEffect } from 'react';
import './DadJoke.css';

function DadJoke() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="DadJoke">
      <div className="Joke-container">
        <p><strong>{joke}</strong></p>
      </div>
      <button className="Joke-button" onClick={fetchJoke}><strong>
      Get Another Joke
      </strong>
      </button>
    </div>
  );
}

export default DadJoke;