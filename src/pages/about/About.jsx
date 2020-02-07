import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

const About = ({ data, isLoading, isError }) => (
  <Fragment>
    <Row className='justify-content-center'>
      <Col sm='8' className='bg-cararra py-4'>
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'
          alt='TMdb'
        />
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </Col>
    </Row>
  </Fragment>
);

export default About;
