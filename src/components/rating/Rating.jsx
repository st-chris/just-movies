import React from 'react';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ vote_average }) => {
  vote_average = Math.round(vote_average / 2 / 0.5) * 0.5;
  const fullStars = Math.floor(vote_average);
  const halfStar = fullStars < vote_average;
  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }
  if (halfStar) stars.push(<FontAwesomeIcon key='05' icon={faStarHalf} />);
  return stars;
};

export default Rating;
