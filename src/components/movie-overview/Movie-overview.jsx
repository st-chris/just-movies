import React, { Fragment } from 'react';
import MovieCard from '../movie-card/Movie-card';
import Pagination from '../pagination/Pagination';
import { Row, Col } from 'reactstrap';

const MovieOverview = ({ data, isLoading, isError, page, setPage }) => {
  return (
    <Fragment>
      {isError && (
        <Row className='justify-content-center'>
          <Col sm='8' className='bg-cararra py-4'>
            Something went wrong...
          </Col>
        </Row>
      )}
      {isLoading || data.length === 0 ? (
        <Row className='justify-content-center'>
          <Col sm='8' className='bg-cararra py-4'>
            Loading...
          </Col>
        </Row>
      ) : data.results.length > 1 ? (
        <Fragment>
          <Pagination page={page} setPage={setPage} pages={data.total_pages} />
          <Row className='justify-content-center'>
            {data.results.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Row>
          <Pagination page={page} setPage={setPage} pages={data.total_pages} />
        </Fragment>
      ) : (
        <Row className='justify-content-center'>
          <Col sm='8' className='bg-cararra py-4'>
            Your search has returned no results...
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default MovieOverview;
