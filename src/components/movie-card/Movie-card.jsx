import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
import Rating from '../rating/Rating';

const MovieCard = ({ movie }) => {
  let poster = '';
  if (!movie.poster_path) {
    poster =
      "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 206 308' style='enable-background:new 0 0 206 308;' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M33,166.8v-12.1h1.7l3.9,6.1c0.9,1.4,1.6,2.7,2.2,3.9l0,0c-0.1-1.6-0.2-3.1-0.2-5v-5.1h1.5v12.1h-1.6l-3.9-6.2 c-0.8-1.4-1.7-2.7-2.3-4.1l-0.1,0c0.1,1.5,0.1,3,0.1,5v5.2H33z'/%3E%3Cpath d='M52.7,162.4c0,3.2-2.2,4.6-4.3,4.6c-2.4,0-4.2-1.7-4.2-4.5c0-2.9,1.9-4.6,4.3-4.6C51,157.9,52.7,159.7,52.7,162.4z M45.7,162.4c0,1.9,1.1,3.3,2.6,3.3c1.5,0,2.6-1.4,2.6-3.4c0-1.5-0.7-3.3-2.6-3.3C46.6,159.1,45.7,160.8,45.7,162.4z'/%3E%3Cpath d='M60.2,155.6c0,0.5-0.4,1-1,1c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1C59.9,154.6,60.2,155.1,60.2,155.6z M58.5,166.8v-8.7h1.6 v8.7H58.5z'/%3E%3Cpath d='M62.7,160.4c0-0.9,0-1.6-0.1-2.4H64l0.1,1.4h0.1c0.5-0.8,1.3-1.6,2.7-1.6c1.2,0,2.1,0.7,2.5,1.7h0c0.3-0.5,0.6-0.9,1-1.1 c0.5-0.4,1.1-0.6,1.9-0.6c1.2,0,2.9,0.8,2.9,3.8v5.1h-1.5v-4.9c0-1.7-0.6-2.7-1.9-2.7c-0.9,0-1.6,0.7-1.9,1.4 c-0.1,0.2-0.1,0.5-0.1,0.8v5.4h-1.5v-5.2c0-1.4-0.6-2.4-1.8-2.4c-1,0-1.7,0.8-2,1.6c-0.1,0.2-0.1,0.5-0.1,0.8v5.3h-1.5V160.4z'/%3E%3Cpath d='M82.5,166.8l-0.1-1.1h-0.1c-0.5,0.7-1.4,1.3-2.7,1.3c-1.8,0-2.7-1.2-2.7-2.5c0-2.1,1.9-3.3,5.2-3.2v-0.2c0-0.7-0.2-2-2-2 c-0.8,0-1.7,0.3-2.3,0.6l-0.4-1c0.7-0.5,1.8-0.8,2.9-0.8c2.7,0,3.3,1.8,3.3,3.6v3.3c0,0.8,0,1.5,0.1,2.1H82.5z M82.3,162.3 c-1.7,0-3.7,0.3-3.7,2c0,1,0.7,1.5,1.5,1.5c1.1,0,1.9-0.7,2.1-1.5c0.1-0.2,0.1-0.3,0.1-0.5V162.3z'/%3E%3Cpath d='M93.9,158.1c0,0.6-0.1,1.3-0.1,2.4v5.1c0,2-0.4,3.2-1.2,4c-0.8,0.8-2.1,1-3.2,1c-1,0-2.2-0.3-2.9-0.7l0.4-1.2 c0.6,0.4,1.5,0.7,2.6,0.7c1.6,0,2.8-0.8,2.8-3v-1h0c-0.5,0.8-1.4,1.5-2.8,1.5c-2.2,0-3.7-1.8-3.7-4.2c0-3,1.9-4.6,3.9-4.6 c1.5,0,2.3,0.8,2.7,1.5h0l0.1-1.3H93.9z M92.2,161.5c0-0.3,0-0.5-0.1-0.7c-0.3-0.9-1.1-1.7-2.2-1.7c-1.5,0-2.6,1.3-2.6,3.3 c0,1.7,0.9,3.1,2.6,3.1c1,0,1.9-0.6,2.2-1.6c0.1-0.3,0.1-0.6,0.1-0.8V161.5z'/%3E%3Cpath d='M97.3,162.7c0,2.1,1.4,3,3,3c1.1,0,1.8-0.2,2.4-0.5l0.3,1.1c-0.6,0.3-1.5,0.5-2.9,0.5c-2.7,0-4.3-1.8-4.3-4.4 s1.5-4.7,4.1-4.7c2.8,0,3.6,2.5,3.6,4.1c0,0.3,0,0.6-0.1,0.7H97.3z M102,161.6c0-1-0.4-2.6-2.2-2.6c-1.6,0-2.3,1.5-2.4,2.6H102z'/%3E%3Cpath d='M114.1,166.8l-0.1-1.1h-0.1c-0.5,0.7-1.4,1.3-2.7,1.3c-1.8,0-2.7-1.2-2.7-2.5c0-2.1,1.9-3.3,5.2-3.2v-0.2c0-0.7-0.2-2-2-2 c-0.8,0-1.7,0.3-2.3,0.6l-0.4-1c0.7-0.5,1.8-0.8,2.9-0.8c2.7,0,3.3,1.8,3.3,3.6v3.3c0,0.8,0,1.5,0.1,2.1H114.1z M113.9,162.3 c-1.7,0-3.7,0.3-3.7,2c0,1,0.7,1.5,1.5,1.5c1.1,0,1.9-0.7,2.1-1.5c0.1-0.2,0.1-0.3,0.1-0.5V162.3z'/%3E%3Cpath d='M118.4,158.1l1.7,4.9c0.3,0.8,0.5,1.5,0.7,2.2h0.1c0.2-0.7,0.5-1.4,0.7-2.2l1.7-4.9h1.7l-3.4,8.7H120l-3.3-8.7H118.4z'/%3E%3Cpath d='M131.2,166.8l-0.1-1.1H131c-0.5,0.7-1.4,1.3-2.7,1.3c-1.8,0-2.7-1.2-2.7-2.5c0-2.1,1.9-3.3,5.2-3.2v-0.2c0-0.7-0.2-2-2-2 c-0.8,0-1.7,0.3-2.3,0.6l-0.4-1c0.7-0.5,1.8-0.8,2.9-0.8c2.7,0,3.3,1.8,3.3,3.6v3.3c0,0.8,0,1.5,0.1,2.1H131.2z M131,162.3 c-1.7,0-3.7,0.3-3.7,2c0,1,0.7,1.5,1.5,1.5c1.1,0,1.9-0.7,2.1-1.5c0.1-0.2,0.1-0.3,0.1-0.5V162.3z'/%3E%3Cpath d='M136.8,155.6c0,0.5-0.4,1-1,1c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1C136.4,154.6,136.8,155.1,136.8,155.6z M135.1,166.8v-8.7 h1.6v8.7H135.1z'/%3E%3Cpath d='M139.3,154h1.6v12.8h-1.6V154z'/%3E%3Cpath d='M148.3,166.8l-0.1-1.1h-0.1c-0.5,0.7-1.4,1.3-2.7,1.3c-1.8,0-2.7-1.2-2.7-2.5c0-2.1,1.9-3.3,5.2-3.2v-0.2c0-0.7-0.2-2-2-2 c-0.8,0-1.7,0.3-2.3,0.6l-0.4-1c0.7-0.5,1.8-0.8,2.9-0.8c2.7,0,3.3,1.8,3.3,3.6v3.3c0,0.8,0,1.5,0.1,2.1H148.3z M148.1,162.3 c-1.7,0-3.7,0.3-3.7,2c0,1,0.7,1.5,1.5,1.5c1.1,0,1.9-0.7,2.1-1.5c0.1-0.2,0.1-0.3,0.1-0.5V162.3z'/%3E%3Cpath d='M152.1,166.8c0-0.6,0.1-1.5,0.1-2.3V154h1.6v5.5h0c0.6-1,1.6-1.6,3-1.6c2.2,0,3.7,1.8,3.7,4.4c0,3.1-2,4.7-3.9,4.7 c-1.3,0-2.3-0.5-2.9-1.6h-0.1l-0.1,1.4H152.1z M153.8,163.3c0,0.2,0,0.4,0.1,0.6c0.3,1.1,1.2,1.9,2.4,1.9c1.7,0,2.6-1.4,2.6-3.3 c0-1.7-0.9-3.2-2.6-3.2c-1.1,0-2.1,0.7-2.4,1.9c0,0.2-0.1,0.4-0.1,0.6V163.3z'/%3E%3Cpath d='M162.4,154h1.6v12.8h-1.6V154z'/%3E%3Cpath d='M167.6,162.7c0,2.1,1.4,3,3,3c1.1,0,1.8-0.2,2.4-0.5l0.3,1.1c-0.6,0.3-1.5,0.5-2.9,0.5c-2.7,0-4.3-1.8-4.3-4.4 s1.5-4.7,4.1-4.7c2.8,0,3.6,2.5,3.6,4.1c0,0.3,0,0.6-0.1,0.7H167.6z M172.2,161.6c0-1-0.4-2.6-2.2-2.6c-1.6,0-2.3,1.5-2.4,2.6 H172.2z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A";
  } else {
    poster = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
  }

  return (
    <Fragment>
      <Col key={movie.id} xs='8' sm='4' lg='2' className='mb-2'>
        <Card className='bg-cararra'>
          <CardImg top width='100%' src={poster} alt={movie.title} />
          <CardBody>
            <CardTitle className='font-weight-bold'>
              {movie.title.length > 20
                ? movie.title.substring(0, 17) + '...'
                : movie.title}
            </CardTitle>
            <CardSubtitle>
              <Rating vote_average={movie.vote_average} /> ({movie.vote_count})
            </CardSubtitle>
            <CardText className='font-italic'>{movie.release_date}</CardText>
            <Link to={`/movie/${movie.id}`}>
              <Button>Read more</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default MovieCard;
