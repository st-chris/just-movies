import React, { Fragment } from 'react';
import MovieCard from '../movie-card/Movie-card';
import { Row, Col } from 'reactstrap';

const MovieOverview = ({ data, isLoading, isError }) => (
  <Fragment>
    <Row className='justify-content-center'>
      {isError && (
        <Col sm='8' className='bg-cararra py-4'>
          Something went wrong...
        </Col>
      )}
      {isLoading ? (
        <Col sm='8' className='bg-cararra py-4'>
          Loading...
        </Col>
      ) : data.length > 1 ? (
        data.map(movie => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <Col sm='8' className='bg-cararra py-4'>
          Your search has returned no results...
        </Col>
      )}
    </Row>
  </Fragment>
);

export default MovieOverview;
