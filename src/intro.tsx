import React, { useState, createContext } from 'react';
import Preview from './preview';
import List from './list';
import Promotion from './promotion';

export const SavedContext = createContext({
  saved: [], addToList: () => null,
});

const movies = [
  { index: 0, title: 'Movie A', description: 'This is movie A' },
  { index: 1, title: 'Movie B', description: 'This is movie B' },
  { index: 2, title: 'Movie C', description: 'This is movie C' }
];

const Intro = () => {
  const [activeMovie, setActiveMovie] = useState(movies[0]);
  const [saved, addToList] = useState([]);

  const handleMovieClick = (movieIndex) =>  setActiveMovie(movies[movieIndex]);

  console.log('===> saved intro', saved);

  return (
    <>
      <SavedContext.Provider value={{saved, addToList}}>
        <Preview movie={activeMovie} isSaved={saved.indexOf(activeMovie.index) > -1} />
        <List movies={movies} onClickMovie={handleMovieClick} />
        {activeMovie.index === 1 && <Promotion />}
      </SavedContext.Provider>
    </>
  );
};

export default Intro;
