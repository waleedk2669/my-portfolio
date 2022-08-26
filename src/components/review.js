import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import { ReviewSlider } from './reviewSlider';

export const Review = () => {
  return (
    <Container fluid style={{ backgroundColor:'#040935', padding: '5rem 0' }}>
    <Container className='d-flex-column align-items-center justify-content-between' fluid style={{ background:'#02092D',padding: '5rem 0 0' }}>
      <ReviewSlider />
    </Container>
    </Container>
  )
}
