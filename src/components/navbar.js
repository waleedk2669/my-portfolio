import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/esm/Image';
export function Navbar() {
  const data = [
    {
      name: 'Home',
      arrow: true
    },
    {
      name: 'About Us',
      arrow: false
    },
    {
      name: 'Services',
      arrow: true
    },
    {
      name: 'Projects',
      arrow: true
    },
    {
      name: 'Blogs',
      arrow: true
    },
    {
      name: 'Pages',
      arrow: true
    },
    {
      name: 'Contact Us',
      arrow: false
    }
  ];
  return (
    <Container className='py-4' fluid>
      <Row>
        <Col sm={3}>
          <Image className='w-25 mx-3' src='/img/logo.svg' />
        </Col>
        <Col sm={6} className='d-flex justify-content-end align-items-center'>
          {
            data.map((obj)=>{
              return (
              <a className='text-white fw-bold text-decoration-none m-2' href='#'>
                {obj.name}  {" "}              
                {obj.arrow? (
                  <FontAwesomeIcon icon={faAngleDown} />

                ): ""}

              </a>)
            })
          }
        </Col>
        <Col sm={3} className='d-inline-flex align-items-center justify-content-center'>
          <Button variant="primary" className='px-5 h-auto py-0 bg-yellow border-0 text-dark fw-bold' style={{borderRadius:"4px"}}>
            Get a Quote
          </Button>
        </Col>
      </Row>
      
    </Container>
  );
}