import React, { Fragment, useEffect } from 'react';
import DataFetch from '../datafetch/DataFetch';
import { Row, Col } from 'reactstrap';
import Rating from '../rating/Rating';

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetails = ({ match }) => {
  const [{ data, isLoading, isError }, doFetch] = DataFetch();

  useEffect(() => {
    doFetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&append_to_response=credits`
    );
  }, [doFetch, match]);

  return (
    <Fragment>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Row className='no-gutters justify-content-center'>
          <Col sm='4' className='p-2 rounded-left bg-cararra'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              className='border border-dark img-fluid'
              alt={data.title}
            />
          </Col>
          <Col sm='4' className='rounded-right pt-3 bg-cararra'>
            <h2 className='text-center'>{data.title}</h2>
            <p className='px-3 font-weight-bold'>
              <Rating vote_average={data.vote_average} /> ({data.vote_count})
            </p>
            <p className='px-3'>{data.overview}</p>
            <p className='px-3 font-italic'>
              Release date: {data.release_date}
            </p>
            <p className='px-3'>
              <span className='font-weight-bold'>Cast:</span>
              {data.credits
                ? data.credits.cast
                    .filter((el, idx) => idx < 10)
                    .map(el => (
                      <Fragment key={el.id}>
                        {' '}
                        {el.name} (
                        <span className='font-italic'>{el.character}</span>) |
                      </Fragment>
                    ))
                : ''}
            </p>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default MovieDetails;
