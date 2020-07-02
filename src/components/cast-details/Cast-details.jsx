import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DataFetch from '../datafetch/DataFetch';
import { Row, Col, Button } from 'reactstrap';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cast-details.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const CastDetails = ({ match, history }) => {
  const [{ data, isLoading, isError }] = DataFetch(
    `https://api.themoviedb.org/3/person/${match.params.id}?api_key=${API_KEY}&append_to_response=combined_credits`
  );
  console.log(data);
  let movieCounter = 0;
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
                <FontAwesomeIcon icon={faBackward} /> Go back
              </Button>
            </Col>
          </Row>
          <Row className='no-gutters justify-content-center'>
            <Col sm='1' className='px-3 bg-cararra'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
                className='border border-dark img-fluid'
                alt={data.name}
              />
            </Col>
            <Col sm='7' className=' px-3 bg-cararra'>
              <h2>{data.name}</h2>
              <p>Place of birth: {data.place_of_birth}</p>
              <p>
                Date of birth: {data.birthday.split('-').reverse().join('-')}
              </p>
              {data.deathday ? (
                <p className='font-italic'>
                  &#8224; {data.deathday.split('-').reverse().join('-')}
                </p>
              ) : (
                ''
              )}
            </Col>
          </Row>
          <Row className='no-gutters justify-content-center'>
            <Col sm='8' className='p-2 bg-cararra'>
              <p className='px-3'>{data.biography}</p>
              <p className='px-3'>
                <span className='font-weight-bold'>Played in:</span>
                {data.combined_credits
                  ? data.combined_credits.cast
                      .sort((a, b) => b.popularity - a.popularity)
                      .filter((el) => {
                        if (el.media_type === 'movie' && movieCounter < 10) {
                          movieCounter++;
                          return el;
                        } else {
                          return false;
                        }
                      })
                      .map((el) => (
                        <Fragment key={el.credit_id}>
                          {' '}
                          <Link to={`/movie/${el.id}`}>
                            {el.original_title
                              ? el.original_title
                              : el.original_name}
                          </Link>{' '}
                          (
                          <span className='font-italic'>as {el.character}</span>
                          ) |
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
                <FontAwesomeIcon icon={faBackward} /> Go back
              </Button>
            </Col>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CastDetails;
