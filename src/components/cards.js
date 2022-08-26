import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/esm/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CgWebsite } from 'react-icons/cg'
import { BsGlobe2 } from 'react-icons/bs'
import { BiNews } from 'react-icons/bi'
import { MdOutlineDeveloperMode } from 'react-icons/md'
export const Cards = () => {
    return (
        <Stack gap={0}>
            <Row className="p-0 my-2">
                <Col lg={6} className="d-flex justify-content-end">
                    <Card className='d-flex flex-row px-0 justify-content-between border-yellow' style={{ width: '22rem', background:'transparent', borderRadius: '1rem' }}>
                        <div className='rounded-circle d-inline-flex mt-4 align-self-start align-items-center justify-content-center' style={{ marginLeft: '1rem', backgroundColor: '#FF9900' }}>
                            <CgWebsite className='m-2' style={{ color: "#02092D", fontSize: '2rem' }} />
                        </div>
                        <Card.Body >
                            <Card.Title>Web Design</Card.Title>
                            <p className='text-justify' style={{ margirRight: '1rem', fontSize: '.8rem' }}>
                                Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem
                            </p>
                            <Card.Link className="text-decoration-none text-yellow" href="#">Read more</Card.Link>
                        </Card.Body>
                        <p className='' style={{ color: 'transparent', marginTop: '-10px', fontSize: '3rem',fontFamily:'Sans-sherif', webkitTextStroke: '2px #383c5e' }}>01</p>
                    </Card>
                </Col>
                <Col lg={6} className="d-flex justify-content-start">
                    <Card className='d-flex flex-row px-0 justify-content-between border-yellow' style={{ width: '22rem', background:'transparent', borderRadius: '1rem' }}>
                        <div className='rounded-circle d-inline-flex mt-4 align-self-start align-items-center justify-content-center' style={{ marginLeft: '1rem', backgroundColor: '#FF9900' }}>
                            <CgWebsite className='m-2' style={{ color: "#02092D", fontSize: '2rem' }} />
                        </div>
                        <Card.Body >
                            <Card.Title>Web Design</Card.Title>
                            <p className='text-justify' style={{ margirRight: '1rem', fontSize: '.8rem' }}>
                                Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem
                            </p>
                            <Card.Link className="text-decoration-none text-yellow" href="#">Read more</Card.Link>
                        </Card.Body>
                        <p className='' style={{ color: 'transparent', marginTop: '-10px', fontSize: '3rem',fontFamily:'Sans-sherif', webkitTextStroke: '2px #383c5e' }}>01</p>
                    </Card>
                </Col>
            </Row>
            <Row className="p-0 my-2">
                <Col lg={6} className="d-flex justify-content-end">
                    <Card className='d-flex flex-row px-0 justify-content-between border-yellow' style={{ width: '22rem', background:'transparent', borderRadius: '1rem' }}>
                        <div className='rounded-circle d-inline-flex mt-4 align-self-start align-items-center justify-content-center' style={{ marginLeft: '1rem', backgroundColor: '#FF9900' }}>
                            <CgWebsite className='m-2' style={{ color: "#02092D", fontSize: '2rem' }} />
                        </div>
                        <Card.Body >
                            <Card.Title>Web Design</Card.Title>
                            <p className='text-justify' style={{ margirRight: '1rem', fontSize: '.8rem' }}>
                                Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem
                            </p>
                            <Card.Link className="text-decoration-none text-yellow" href="#">Read more</Card.Link>
                        </Card.Body>
                        <p className='' style={{ color: 'transparent', marginTop: '-10px', fontSize: '3rem',fontFamily:'Sans-sherif', webkitTextStroke: '2px #383c5e' }}>01</p>
                    </Card>
                </Col>
                <Col lg={6} className="d-flex justify-content-start">
                    <Card className='d-flex flex-row px-0 justify-content-between border-yellow' style={{ width: '22rem', background:'transparent', borderRadius: '1rem' }}>
                        <div className='rounded-circle d-inline-flex mt-4 align-self-start align-items-center justify-content-center' style={{ marginLeft: '1rem', backgroundColor: '#FF9900' }}>
                            <CgWebsite className='m-2' style={{ color: "#02092D", fontSize: '2rem' }} />
                        </div>
                        <Card.Body >
                            <Card.Title>Web Design</Card.Title>
                            <p className='text-justify' style={{ margirRight: '1rem', fontSize: '.8rem' }}>
                                Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem
                            </p>
                            <Card.Link className="text-decoration-none text-yellow" href="#">Read more</Card.Link>
                        </Card.Body>
                        <p className='' style={{ color: 'transparent', marginTop: '-10px', fontSize: '3rem',fontFamily:'Sans-sherif', webkitTextStroke: '2px #383c5e' }}>01</p>
                    </Card>
                </Col>
            </Row>
        </Stack>)
}
