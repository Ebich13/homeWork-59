import React from "react";
import MovieItem from "./MovieItem";
import {Movie} from "../../types";

// Define the prop types for MovieList
interface Props {
    movies: Movie[];
    editMovie: (id: number, title: string) => void;
    deleteMovie: (id: number) => void;
}

const MovieList: React.FC<Props> = ({ movies, editMovie, deleteMovie }) => {
    return (
        <div>
            {movies.map((movie ) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    editMovie={editMovie}
                    deleteMovie={deleteMovie}
                />
            ))}
        </div>
    );
};

export default MovieList;

