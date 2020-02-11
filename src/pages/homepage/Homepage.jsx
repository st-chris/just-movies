import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';

let randomNum = Math.floor(Math.random() * 21);

const Homepage = ({ data, isLoading, isError }) => {
  return (
    <Fragment>
      {isError && (
        <Row className='justify-content-center'>
          <Col sm='8' className='bg-cararra py-4'>
            Something went wrong...
          </Col>
        </Row>
      )}
      {!data.results ? (
        <Row className='justify-content-center'>
          <Col sm='8' className='bg-cararra py-4'>
            Loading...
          </Col>
        </Row>
      ) : (
        <Row className='no-gutters justify-content-center'>
          <Col sm='4' className='p-2 rounded-left bg-cararra'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.results[randomNum].poster_path}`}
              className='border border-dark img-fluid'
              alt={data.results[randomNum].title}
            />
          </Col>
          <Col sm='4' className='rounded-right pt-3 bg-cararra'>
            <h2 className='text-center'>Movie of the Moment</h2>
            <p className='px-3 font-weight-bold'>
              {data.results[randomNum].title}
            </p>
            <p className='px-3'>{data.results[randomNum].overview}</p>
            <p className='px-3 font-italic'>
              Release date: {data.results[randomNum].release_date}
            </p>
            <p className='text-center'>
              <Link to={`/movie/${data.results[randomNum].id}`}>
                <Button>Read more</Button>
              </Link>
            </p>
            <p className='px-3'>
              <Link to='/popular'>See more popular movies</Link>
            </p>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default Homepage;
