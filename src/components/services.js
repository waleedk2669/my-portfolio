import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/esm/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CgWebsite} from 'react-icons/cg'
import {BsGlobe2} from 'react-icons/bs'
import {BiNews} from 'react-icons/bi'
import {MdOutlineDeveloperMode} from 'react-icons/md'
import {Cards} from './cards'
export function Services() {
  return (
    <Container fluid style={{backgroundColor:'#040935',padding:'10rem 0 5rem'}}>
      <Container className='' >
        <Row>
          <Col lg={4}>
            <Stack>
              <div className='text-uppercase text-decoration-underline text-yellow fs-5 my-3'>What we do</div>
              <h2 className='text-lg text-white mb-5'  style={{textAlign:'left',fontSize:'3rem',fontWeight:'700', fontFamily:'Sans-sherif', lineHeight:'4rem'}}>We work<br />Performed For<br />Client Happy.</h2>
              <div><Button variant="primary" className='px-4 py-1 bg-yellow text-dark fw-bold border-0' style={{ borderRadius: "4px" }}>
                View All Services
              </Button></div>
            </Stack>
          </Col>
          <Col lg={8}>
            <Cards />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}