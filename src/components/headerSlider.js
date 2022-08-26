import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'react-bootstrap/Image'
import '../App.css'
// import required modules
import { Pagination, Navigation } from "swiper";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
import { Heading } from "./heading";
import { OutlinedHeading } from "./outlinedText";

export function HeaderSlider() {
    const data = [
        {
            pic: '/img/shopping.svg'
        },
        {
            pic: '/img/shopping.svg'
        },
        {
            pic: '/img/shopping.svg'
        }
        
    ];
    return (
        <div className="h-1000p d-flex m-0 p-0 container-fluid" >
            <Stack gap={3} className='d-inline-flex-colunm align-self-center align-items-center dots' style={{ width: '5%', zIndex:'22' }}>

            </Stack>
            <Swiper
            style={{
                margin: '3rem 0 3rem', width:'95%',
            }}
                loop={false}
                direction={"vertical"}
                slidesPerView={1}
                modules={[Pagination]}  
                pagination={{
                    el: '.dots',
                    clickable: true,
                    type:'bullets',
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + `<div class='rounded-circle d-flex align-items-center justify-content-center' style='color:transparent;height:20px;width:20px;border:2px solid #ff9900'><div class='rounded-circle' style='height:10px;width:10px;border:3px solid #ff9900''></div></div>` + '</span>';
                    },
                    // bulletActiveClass:'.swiperpagination-bullet-active'
                }}

                className="mySwiper"
                
            >
                {data.map((slideData) => {
                    const { pic } = slideData;
                    return (
                        <SwiperSlide className="" style={{ width: '100%', overflow:'hidden' }}>
                            <Row className='m-0'>
                                <Col lg={6} className='d-flex align-items-center justify-content-center '><Image className="m-5 h-400" src={slideData.pic} /></Col>
                                <Col lg={6}>
                                    <Stack style={{ paddingRight: '5rem' }}>
                                        <Heading className='m-4'> <OutlinedHeading className="text-grey">CREATIVE</OutlinedHeading><br />BEST SOLUTION FOR<br /> YOUR <OutlinedHeading className="text-yellow">BUSINESS</OutlinedHeading></Heading>
                                        <p className='m-4'>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla an Duis a orci nunc. Suspendisse ac convallis sapien, quis commodosani libero. Donec nec dui luctus, pellentesque lacus sed, mollis leo.</p>
                                        <div className='d-flex justify-content-end m-4'>
                                            <Button variant="primary" className='px-4 bg-yellow text-dark border-0 fw-bold py-1 mx-2' style={{ borderRadius: "4px" }}>
                                                About Us
                                            </Button>
                                            <Button variant="outlined-primary" className='px-4 fw-bold rounded-1 py-1 mx-2 text-yellow border-yellow' >
                                                How We Work
                                            </Button>
                                        </div>
                                        <div className='d-flex justify-content-end mt-5'>
                                            <AiFillFacebook className='' style={{ color: "#FF9900", fontSize: '2rem' }} />
                                            <AiOutlineLinkedin className='' style={{ color: "#FF9900", fontSize: '2rem' }} />
                                            <AiOutlineInstagram className='' style={{ color: "#FF9900", fontSize: '2rem' }} />

                                        </div>
                                    </Stack>
                                </Col>
                            </Row>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>

    );
}
