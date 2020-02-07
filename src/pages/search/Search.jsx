import React, { useEffect } from 'react';
import DataFetch from '../../components/datafetch/DataFetch';
import MovieOverview from '../../components/movie-overview/Movie-overview';
import { API_KEY } from '../../config';

const Search = ({ match }) => {
  const [{ data, isLoading, isError }, doFetch] = DataFetch();
  console.log(data);
  useEffect(() => {
    doFetch(
      `https://api.themoviedb.org/3/search/movie?query=${match.params.query}&api_key=${API_KEY}`
    );
  }, [doFetch, match]);
  return <MovieOverview data={data} isLoading={isLoading} isError={isError} />;
};

export default Search;
