import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import List from './list';

describe('#list', () => {
  const movies = [
    { title: 'Movie A' },
    { title: 'Movie B' }
  ];

  it('should render list', () => {
    render((<List movies={movies} />));

    expect(screen.getByText('Movie A')).toBeDefined();

    expect(1).toEqual(1);
  });
});
