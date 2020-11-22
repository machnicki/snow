import React, { useMemo, useState } from 'react';
import { Movie } from './types/';

const renderDesc = (desc) => {
  console.log('renderDesc');

  return `description: ${desc}`;
};

type PreviewProps = {
  movie: Movie;
  isSaved: boolean;
}

const Preview = ({
  movie: {
    title,
    description,
  },
  isSaved = false
}: PreviewProps) => {
  const desc = useMemo(() => renderDesc(description), [description]);

  console.log('render preview', desc);

  return (
    <div>
      <h2>{title}</h2>
      {isSaved && <i>saved</i>}
      <div>{desc}</div>
    </div>
  );
};

export default Preview;
