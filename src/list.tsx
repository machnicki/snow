import React, { useContext } from 'react';
import { SavedContext } from './intro';
import { Movie } from './types/';

type ListProps = {
  movies: Movie[];
  onClickMovie: (number) => any;
}

const List = ({ movies = [], onClickMovie = (_) => null }: ListProps) => {
  const {saved , addToList} = useContext(SavedContext);
  const handleSaveClick = (movieIndex) => () => addToList((list) => ([...list, movieIndex]));

  return (
    <ul>
      {movies.map(({ title }, index) => (
        <li
          key={index}
        >
          <a onClick={() => onClickMovie(index)}>{title}</a>
          {saved.indexOf(index) === -1 && <button onClick={handleSaveClick(index)}>save</button>}
        </li>
      ))}
    </ul>
  );
};

export default List;
