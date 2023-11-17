import React from 'react';
import {Movie} from "../../types";
interface Props {
    movie: Movie;
    editMovie: (id: number, newTitle: string) => void;
    deleteMovie: (id: number) => void;
}
const MovieItem: React.FC<Props> = ({ movie, editMovie, deleteMovie }) => {
    return (
        <div className="mb-2">
            <div className="input-group">
                <input
                    type="text"
                    value={movie.title}
                    onChange={(e) => editMovie(movie.id, e.target.value)}
                    className="form-control"
                />
                <div className="input-group-append">
                    <button onClick={() => deleteMovie(movie.id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;



