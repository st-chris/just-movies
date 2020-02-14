import React, { Fragment, useEffect } from 'react';
import DataFetch from '../datafetch/DataFetch';
import { Row, Col, Button } from 'reactstrap';
import Rating from '../rating/Rating';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './movie-details.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetails = ({ match, history }) => {
  const [{ data, isLoading, isError }, doFetch] = DataFetch(
    `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&append_to_response=credits`
  );

  useEffect(() => {
    doFetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&append_to_response=credits`
    );
  }, [doFetch, match]);

  return (
    <Fragment>
      {isError ? (
        <Row className='justify-content-center'>
          <Col sm='8' className='bg-cararra py-4'>
            Something went wrong...
          </Col>
        </Row>
      ) : isLoading || data === null ? (
        <Row className='justify-content-center'>
          <Col sm='8' className='bg-cararra py-4'>
            Loading...
          </Col>
        </Row>
      ) : (
        <Fragment>
          <Row className='no-gutters justify-content-center'>
            <Col sm='8' className='text-center'>
              <Button
                className='bg-cararra border-0 btn-details-top'
                block
                onClick={() => history.goBack()}
              >
                <FontAwesomeIcon icon={faBackward} /> Go back to results
              </Button>
            </Col>
          </Row>
          <Row className='no-gutters justify-content-center'>
            <Col sm='4' className='p-2 bg-cararra'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                className='border border-dark img-fluid'
                alt={data.title}
              />
            </Col>
            <Col sm='4' className='pt-3 bg-cararra'>
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
          <Row className='no-gutters justify-content-center'>
            <Col sm='8' className='text-center'>
              <Button
                className='bg-cararra border-0 btn-details-bottom'
                block
                onClick={() => history.goBack()}
              >
                <FontAwesomeIcon icon={faBackward} /> Go back to results
              </Button>
            </Col>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieDetails;
