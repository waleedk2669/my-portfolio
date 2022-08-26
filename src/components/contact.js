import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const Contact = () => {
  return (
      <Container fluid className='d-flex-column rounded align-items-center justify-content-between' style={{ padding: '5rem 0', backgroundImage:'url("/img/hands.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))', backgroundPosition:'center center', backgroundSize:'cover',backgroundBlendMode:'overlay' }}>
        <Container className='d-flex align-items-center justify-content-between'>
        <div>
        <div className='text-uppercase  text-decoration-underline my-2' style={{color:'#ff9900'}}>lets talk</div>
        <h2 className='text-uppercase' style={{fontSize: '3rem', fontWeight: '700', fontFamily: 'Sans-sherif', lineHeight: '5rem' }}>about your next<br /><span style={{ color: 'transparent', WebkitTextStroke: '2px #ff9900' }}>PROJECT</span>your mind</h2>
        
        </div>
        <Button variant="" className='fw-bold px-4 py-1 mx-2' style={{ borderRadius: "4px", background:'#ff9900',color:'black'}}>
            View All Blog
          </Button>
        </Container>
      </Container>
  )
}
