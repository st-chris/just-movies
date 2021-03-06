import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DataFetch from './components/datafetch/DataFetch';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Search from './pages/search/Search';
import MovieOverview from './components/movie-overview/Movie-overview';
import MovieDetails from './components/movie-details/Movie-details';
import CastDetails from './components/cast-details/Cast-details';
import About from './pages/about/About';
import './App.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [page, setPage] = useState(1);
  const [{ data, isLoading, isError }, doFetch] = DataFetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=${API_KEY}`
  );

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
            render={(props) => (
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
            render={(props) => (
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
          <Route exact path='/movie/:id' component={MovieDetails} />
          <Route exact path='/cast/:id' component={CastDetails} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
