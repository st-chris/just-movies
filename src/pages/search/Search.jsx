import React, { useEffect, useState } from 'react';
import DataFetch from '../../components/datafetch/DataFetch';
import MovieOverview from '../../components/movie-overview/Movie-overview';
const API_KEY = process.env.REACT_APP_API_KEY;
const Search = ({ match }) => {
  const [page, setPage] = useState(1);
  const [{ data, isLoading, isError }, doFetch] = DataFetch(
    `https://api.themoviedb.org/3/search/movie?query=${match.params.query}&page=${page}&api_key=${API_KEY}`
  );

  useEffect(() => {
    doFetch(
      `https://api.themoviedb.org/3/search/movie?query=${match.params.query}&page=${page}&api_key=${API_KEY}`
    );
  }, [doFetch, match, page]);
  return (
    <MovieOverview
      data={data}
      isLoading={isLoading}
      isError={isError}
      page={page}
      setPage={setPage}
    />
  );
};

export default Search;
