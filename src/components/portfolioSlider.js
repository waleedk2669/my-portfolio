import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";

export function PortfolioSlider() {
    const data = [
        {
            discription: 'E-Shop Commerce',
            type: 'UI Kit',
            pic: '/img/card-1.jpg'
        },
        {
            discription: 'Desktop Mockup',
            type: 'Software',
            pic: '/img/card-1.jpg'
        },
        {
            discription: 'Art Deco Cocktails',
            type: 'Graphic',
            pic: '/img/card-1.jpg'
        },
        {
            discription: 'Mobile Crypto Wallet',
            type: 'App',
            pic: '/img/card-1.jpg'
        }
    ];
    return (
            <Swiper 
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                modules={[Navigation]}
                navigation= {{
                    nextEl:'.e',
                    prevEl:'.d'
                }}

                className="mySwiper m-5"
            >
                {data.map((slideData) => {
                    const {pic} = slideData;
                    return (
                        <SwiperSlide className="" style={{width:'20%'}}>
                            <Container className="position-relative p-2 rounded-2" style={{height:'350px',backgroundImage:`url(${slideData.pic})`, backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                                {/* <Image fluid rounded src={pic} className='d-block img-fluid position-absolute top-0 start-0 end-0 bottom-0 rounded-2' style={{height:'300px'}}/> */}
                                <Stack className="position-absolute bottom-0 start-0 end-0 p-2 m-3 rounded-2" gap={0} style={{background:'#02092d'}}>
                                    <p className="fs-5 px-2 lh-1">{slideData.type}</p>
                                    <p className="fs-5 px-2  lh-1">{slideData.discription}</p>


                                </Stack>
                            </Container>
                        </SwiperSlide>
                    );
                })}
                

            </Swiper>
    );
}
