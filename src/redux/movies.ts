import { Movie } from '../types';
import wait from '../wait';
import { useReducer } from 'react';

enum ADD {
  START = 'MOVIES_ADD_START',
  SUCCESS = 'MOVIES_ADD_SUCCESS',
}

type reducerType = {
  isLoading: boolean,
  data: Movie[];
};

type actionType = {
  type: ADD,
  payload?: Movie[];
};

const movies: Movie[] = [
  { index: 0, title: 'Movie A', description: 'This is movie A' },
  { index: 1, title: 'Movie B', description: 'This is movie B' },
  { index: 2, title: 'Movie C', description: 'This is movie C' }
];

const getInitialState = () => ({
  isLoading: false,
  data: [],
});

const moviesReducer = (state: reducerType = getInitialState(), {
  type,
  payload,
}: actionType) => {
  switch (type) {
    case ADD.START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD.SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload],
        isLoading: false
      };
    default:
      return state;
  }
}

type useMoviesReducerResponse = {
  state: reducerType,
  getMovies: () => any,
}

const useMoviesReducer = (): useMoviesReducerResponse => {
  const [state, dispatch] = useReducer(moviesReducer, getInitialState());

  const getMovies = async () => {
    dispatch({
      type: ADD.START,
    })

    await wait(1000)

    dispatch({
      type: ADD.SUCCESS,
      payload: movies,
    })
  };

  return {
    state,
    getMovies,
  };
}

export default useMoviesReducer;
