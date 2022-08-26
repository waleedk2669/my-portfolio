import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const NewsLetter = () => {
  return (
    <Container fluid style={{ backgroundColor: '#232343', padding: '5rem 0' }}>
      <Container className='d-flex-column rounded align-items-center justify-content-between' style={{ padding: '5rem 0', backgroundImage:'url("/img/hands.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))', backgroundPosition:'center center', backgroundSize:'cover',backgroundBlendMode:'overlay' }}>
        <div className='text-uppercase text-center text-decoration-none text-yellow fs-5 fw-bold my-2'>get in touch</div>
        <h2 className='m-4 text-uppercase' style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '700', fontFamily: 'Sans-sherif', lineHeight: '4rem' }}>subscribe our<br /><span style={{ color: 'transparent', WebkitTextStroke: '2px #fff' }}>NewsLetter</span></h2>
        <Form>
          <Form.Group className="mb-3 d-flex w-50 mx-auto justify-content-between rounded p-2" style={{backgroundColor:'white'}} controlId="formBasicEmail">
            <Form.Control type="email" className='w-50 border-0 fw-bold shadow-none' placeholder="Type Your Email" />
            <Button variant="primary" className='px-4 py-1 border-0 text-dark fw-bold shadow-none bg-yellow' style={{ borderRadius: "4px" }}>
                Connect
              </Button>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  )
}
