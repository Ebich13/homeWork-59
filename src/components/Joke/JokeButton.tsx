import React from 'react';

interface Props {
  onClick: () => void;
}

const JokeButton: React.FC<Props> = React.memo(({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary mt-2">
      Get new jokes
    </button>
  );
});

export default JokeButton;