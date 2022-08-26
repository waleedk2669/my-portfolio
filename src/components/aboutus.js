import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/esm/Stack';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/esm/Image';

export function AboutUs() {
  return (
    <Container className='m-0' style={{ backgroundColor: '#22243c', padding: '10rem 0 5rem' }} fluid>
      <Container>
        <Row className='m-0'>
          <Col lg={6}>
            <Stack>
              <div className='text-uppercase text-decoration-underline fs-4 text-yellow my-2'>about us</div>
              <h2 className='text-lg text-white mb-3' style={{ textAlign: 'left', fontSize: '3rem', fontWeight: '700', fontFamily: 'Sans-sherif', lineHeight: '4rem' }}>Direction With Our<br />Company.</h2>
              <p className='text-justify' style={{ margirRight: '1rem', fontSize: '.8rem' }}>
                Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Classe aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ei Donec lacinia placerat felis non aliquam.Integer purus odio              </p>
              <Row className='mb-2'>
                <Col md={3}>
                <Image className="w-50" src='/img/sales.svg' />

                </Col>
                <Col md={9}>
                  <Stack>
                    <h3 className='text-lg text-white mb-2' style={{ textAlign: 'left', fontSize: '1rem', fontWeight: '700', fontFamily: 'Sans-sherif', lineHeight: '1rem', letterSpacing: '.8px' }}>Our Mission</h3>
                    <p className='text-justify' style={{ margirRight: '1rem', fontSize: '.8rem' }}>
                      Integer purus odio, placerat nec rhoni olor Class online <br />and video.
                    </p>

                    <div></div>
                  </Stack>
                </Col>
              </Row>
              <div><Button variant="primary" className='px-4 py-1 my-3 bg-yellow text-dark fw-bold border-0' style={{ borderRadius: "4px" }}>
                About more
              </Button></div>
            </Stack>

          </Col>
          <Col lg={6} className='d-flex justify-content-center'>
          <Image className="h-400" src='/img/wardogs_girls.svg' />

          </Col>
        </Row>

      </Container>

    </Container>
  );
}