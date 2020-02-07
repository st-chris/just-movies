import React, { Fragment } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from 'reactstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieCard = ({ movie }) => {
  const rating = Math.round(movie.vote_average / 2);
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  return (
    <Fragment>
      <Col key={movie.id} xs='8' sm='4' lg='2' className='mb-2'>
        <Card className='bg-cararra'>
          <CardImg
            top
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt='Card image cap'
          />
          <CardBody>
            <CardTitle className='font-weight-bold'>
              {movie.title.length > 20
                ? movie.title.substring(0, 17) + '...'
                : movie.title}
            </CardTitle>
            <CardSubtitle>
              {stars} ({movie.vote_count})
            </CardSubtitle>
            <CardText className='font-italic'>{movie.release_date}</CardText>
            <Button>Read more</Button>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default MovieCard;
