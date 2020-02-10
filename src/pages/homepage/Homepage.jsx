import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

let randomNum = Math.floor(Math.random() * 11);

const Homepage = ({ data, isLoading, isError }) => {
  return (
    <Fragment>
      {isError && <div>Something went wrong...</div>}
      {!data.results ? (
        <div>Loading...</div>
      ) : (
        <div className='row no-gutters justify-content-center'>
          <div className='col-sm-4 p-2 rounded-left bg-cararra'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.results[randomNum].poster_path}`}
              className='border border-dark img-fluid'
              alt={data.results[randomNum].title}
            />
          </div>
          <div className='col-sm-4 rounded-right pt-3 bg-cararra'>
            <h2 className='text-center'>Movie of the Moment</h2>
            <p className='px-3 font-weight-bold'>
              {data.results[randomNum].title}
            </p>
            <p className='px-3'>{data.results[randomNum].overview}</p>
            <p className='px-3 font-italic'>
              Release date: {data.results[randomNum].release_date}
            </p>

            <p className='px-3'>
              <Link to='/popular'>See more popular movies</Link>
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Homepage;
