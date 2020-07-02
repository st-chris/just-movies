import React from 'react';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ vote_average }) => {
  let starRating = Math.round(vote_average / 2 / 0.5) * 0.5;
  const fullStars = Math.floor(starRating);
  const halfStar = fullStars < starRating;
  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }
  if (halfStar) stars.push(<FontAwesomeIcon key='05' icon={faStarHalf} />);
  return <span title={vote_average}>{stars}</span>;
};

export default Rating;
