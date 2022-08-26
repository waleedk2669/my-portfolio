import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import { PortfolioSlider } from './portfolioSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export const Portfolio = () => {
  return (
    <Container fluid style={{ background: '#22243c', padding: '10rem 0' }} className="" >
      <Container>
        <div className='text-uppercase text-decoration-underline text-yellow fs-5 my-2'>case study</div>
        <Row>
          <Col>
            <h2 className='text-lg text-white mb-3' style={{ textAlign: 'left', fontSize: '3rem', fontWeight: '700', fontFamily: 'Sans-sherif', lineHeight: '4rem' }}>A Diversified <br />Resilient Portfolio.</h2>
          </Col>
          <Col className="d-flex align-items-end justify-content-end">
            <div className='w-50'>
              <Button className="d d-inline-block rounded-circle text-white shadow-none mx-5" variant="secondary" size={'sm'}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </Button>
              <Button className="e d-inline-block rounded-circle text-white shadow-none mx-5" variant="secondary" size={'sm'}>
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <PortfolioSlider />

    </Container>
  )
}
