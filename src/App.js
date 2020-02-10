import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DataFetch from './components/datafetch/DataFetch';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Search from './pages/search/Search';
import MovieOverview from './components/movie-overview/Movie-overview';
import About from './pages/about/About';
import { API_KEY } from './config';
import './App.scss';

const App = () => {
  const [{ data, isLoading, isError }, doFetch] = DataFetch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    doFetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=${API_KEY}`
    );
  }, [doFetch, page]);

  return (
    <Router>
      <div className='container-fluid'>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Homepage
                data={data}
                isLoading={isLoading}
                isError={isError}
                {...props}
              />
            )}
          />
          <Route
            exact
            path='/popular'
            render={props => (
              <MovieOverview
                data={data}
                isLoading={isLoading}
                isError={isError}
                page={page}
                setPage={setPage}
                {...props}
              />
            )}
          />
          <Route exact path='/search/:query' component={Search} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
