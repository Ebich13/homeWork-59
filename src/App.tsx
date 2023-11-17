import React, {useState} from 'react';
import JokeButton from './components/Joke/JokeButton';
import JokeDisplay from './components/Joke/JokeDisplay';
import MovieForm from './components/MovieForm/MovieForm';
import MovieList from './components/MovieList/MoviesList';
import {Jokes, Movie} from "./types";

const url = 'https://api.chucknorris.io/jokes/random';

function App() {
  const [jokes, setJokes] = useState<Jokes[]>([]);
  const [loading, setLoading] = useState(false);

  const [movies, setMovies] = useState<Movie[]>([]);

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
  const handleMovieAdd = (title : string) => {
    const newMovie = { id: Math.random(), title };
    setMovies([...movies, newMovie]);
  };

  const handleMovieEdit = (id: number, newTitle: string) => {
    setMovies((prevMovies) => {
        return prevMovies.map((movie) => (movie.id === id ? {...movie, title: newTitle} : movie));
      }
    );
  };

  const handleMovieDelete = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  console.log('Rendering App');

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            jokes.map((joke, index) => (
              <JokeDisplay key={index} joke={joke} />
            ))
          )}
          <JokeButton onClick={fetchJokes} />
        </div>
        <div className="col-md-6">
          <MovieForm onAdd={handleMovieAdd} />
          <MovieList
            movies={movies}
            editMovie={handleMovieEdit}
            deleteMovie={handleMovieDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;