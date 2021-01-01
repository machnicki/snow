import { useState, useEffect } from 'react';

const useSavedMovies = (movies = [], activeMovie = 0): [any, () => any] => {
  const [saved, setState] = useState([]);

  const init = () => useEffect(() => {
    console.log('activeMovie', activeMovie);

    setState(() => {
      // return movies.filter(({ index }) => activeMovies.includes(index) );
      return movies.filter(({ index }) => activeMovie === index );
    })
  }, [movies, activeMovie]);

  return [saved, init];
}

export default useSavedMovies;
