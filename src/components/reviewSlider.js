import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from 'react-stars'
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

export function ReviewSlider() {
    const data = [
        {
            name: "Gautam Yamni",
            role: 'Designer Head',
            review: 'Curabitur magna nisi, egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis, ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor odio, aliquam vitae noday backowner condimentum this fire ongon then only on',
            rating: '5',
            pic: '/img/girl.jpg'
        },
        {
            name: "Gautam Yamni",
            role: 'Designer Head',
            review: 'Curabitur magna nisi, egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis, ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor odio, aliquam vitae noday backowner condimentum this fire ongon then only on',
            rating: '5',
            pic: '/img/girl.jpg'
        },
        {
            name: "Gautam Yamni",
            role: 'Designer Head',
            review: 'Curabitur magna nisi, egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis, ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor odio, aliquam vitae noday backowner condimentum this fire ongon then only on',
            rating: '5',
            pic: '/img/girl.jpg'
        }
    ];
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                    renderFraction: function(currentClass,totalClass){
                        return '<span class="' + currentClass + ' fs-3" style="color:white"></span>' +
                        '<span style="padding: 0 .5rem"> / </span> ' +
                        '<span class="' + totalClass + '"></span>';
                    },
                    el: '.c',
                    currentClass:'.current',
                    totalClass:'.total',

                }}
                navigation={{
                    nextEl: ".a",
                    prevEl: ".b"
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((slideData) => {
                    return (
                        <SwiperSlide>
                            <Container className="w-75 d-flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center mb-5 align-items-center"> 
                                   
                                        <img className="rounded-2" style ={{width:'100px'}} src={slideData.pic} />
                                    
                                    <div>
                                        <h2 className='mx-4 text-uppercase' style={{ fontSize: '2rem', fontWeight: '700', fontFamily: 'Sans-sherif', lineHeight: '3rem' }}>{slideData.name}</h2>
                                        <p className="mx-4 fs-5 ">{slideData.role}</p>
                                    </div>
                                </div>
                                <p className="text-center lh-lg">{slideData.review}</p>
                                <ReactStars className="d-flex justify-content-center"
                                    count={5}
                                    value={slideData.rating}
                                    size={'40'}
                                    edit={false}
                                    color2={'#ffd700'} />
                            </Container>
                        </SwiperSlide>
                    );
                })}
                <Row className="d-flex justify-content-between ">
                    <Col className="" lg={3}>
                        <p className="c d-flex justify-content-end fs-5 lh-1 p-0 m-0 align-items-end" style={{color:'red'}}> 
                        </p>
                    </Col>
                    <Col lg={3} className="d-flex ">
                        <Button className="b fs-4 d-flex align-items-center px-4 py-2 text-white shadow-none rounded-1 mx-1" variant="secondary">
                            <GrPrevious style={{color:'white'}} />
                            
                            </Button>
                        <Button className="a fs-4 d-flex align-items-center px-4 py-2 rounded-1 mx-1 shadow-none" variant="secondary" size="lg"><GrNext /></Button>
                    </Col>

                </Row>

            </Swiper>
        </>
    );
}
