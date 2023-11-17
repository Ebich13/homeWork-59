import React, { useState } from 'react';
interface Props {
    onAdd: (newMovie: string) => void;
}

const MovieForm: React.FC<Props> = ({onAdd}) => {
    const [newMovie, setNewMovie] = useState('');

    const addMovie = () => {
        if (newMovie !== '') {
            onAdd(newMovie);
            setNewMovie('');
        }
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                placeholder="Enter a movie title"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
                className="form-control"
            />
            <div className="input-group-append">
                <button onClick={addMovie} className="btn btn-primary">Add</button>
            </div>
        </div>
    );
};

export default MovieForm;

