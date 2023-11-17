import React from 'react';
import {Jokes} from "../../types";

interface Props {
  joke: Jokes;
}

const JokeDisplay: React.FC<Props> = ({joke} ) => {
  return (
    <div>
      <h2>Chuck Norris Joke</h2>
      <p>{joke}</p>
    </div>
  );
};

export default JokeDisplay;