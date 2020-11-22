import React, { useState, createContext, useEffect } from 'react';
import Preview from './preview';
import List from './list';
import Promotion from './promotion';
import useMoviesReducer from './redux/movies';

export const SavedContext = createContext({
  saved: [], addToList: (_: any) => null,
});

const Intro = () => {
  const { state: { isLoading, data: movies }, getMovies } = useMoviesReducer();
  const [activeMovie, setActiveMovie] = useState(0);
  const [saved, addToList] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieClick = (movieIndex) => setActiveMovie(movieIndex);

  console.log('===> saved intro', saved);

  return (
    isLoading ? <div>loading...</div> : 
    <>
      {movies.length === 0 ? <div>no movies...</div> : <SavedContext.Provider value={{saved, addToList}}>
        <Preview movie={movies[activeMovie]} isSaved={saved.indexOf(activeMovie) > -1} />
        <List movies={movies} onClickMovie={handleMovieClick} />
        {activeMovie === 1 && <Promotion />}
      </SavedContext.Provider>}
    </>
  );
};

export default Intro;
