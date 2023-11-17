import React, {useState} from 'react';
import JokeButton from './components/Joke/JokeButton';
import JokeDisplay from './components/Joke/JokeDisplay';
import {Jokes} from "./types";

const url = 'https://api.chucknorris.io/jokes/random';

function App() {
  const [jokes, setJokes] = useState<Jokes[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchJokes = async () => {
    try {
      setLoading(true);
      const responses = await Promise.all(
        Array.from({ length: 5 }, () => fetch(url).then(response => response.json()))
      );

      const newJokes = responses.map(data => data.value);
      setJokes(newJokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="col-md-6">
      <JokeButton onClick={fetchJokes} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        jokes.map((joke, index) => (
          <JokeDisplay key={index} joke={joke} />
        ))
      )}
    </div>


  );
}

export default App;
