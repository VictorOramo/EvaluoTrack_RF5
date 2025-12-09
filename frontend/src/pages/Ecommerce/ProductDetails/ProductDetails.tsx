import React, { useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Container, Row, Col, Card } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//img
import pImg1 from "assets/images/products/img-1.png";
import pImg7 from 'assets/images/products/img-7.png';
import pImg8 from 'assets/images/products/img-8.png';
import pImg10 from 'assets/images/products/img-10.png';
import pImg6 from 'assets/images/products/img-6.png';

import ShopingInformation from "./ShopingInfo";
import ProductRatting from "./ProductRatting";
import { ToastContainer } from "react-toastify";

//img
export const productdetailsImg = [
    { id: 1, img: pImg1 },
    { id: 2, img: pImg7 },
    { id: 3, img: pImg8 },
    { id: 4, img: pImg10 },
    { id: 5, img: pImg6 },
]

const ProductDetails = () => {
    document.title = "Products Overview | Steex - Admin & Dashboard Template";

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Product Overview" pageTitle="Ecommerce" />
                    <Row>
                        <Col xxl={4}>
                            <Card className="p-3 sticky-side-div">
                                <div className="product-img-slider">
                                    <Swiper
                                        thumbs={{ swiper: thumbsSwiper }}
                                        navigation={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        spaceBetween={15}
                                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                                        className="swiper product-thumbnail-slider p-2 rounded bg-light"
                                    >
                                        {
                                            (productdetailsImg || [])?.map((item: any) => {
                                                return (
                                                    <SwiperSlide key={item.id} style={{ width: "452px" }} >
                                                        <div className="p-5 mx-4">
                                                            <img src={item.img} alt="" className="img-fluid d-block" />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        spaceBetween={10}
                                        className="swiper product-nav-slider mt-2 swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
                                    >
                                        <div className="swiper-wrapper">
                                            {
                                                (productdetailsImg || [])?.map((item: any) => {
                                                    return (
                                                        <SwiperSlide className="rounded" key={item.id}>
                                                            <div className="nav-slide-item">
                                                                <img
                                                                    src={item.img}
                                                                    alt=""
                                                                    className="img-fluid d-block rounded"
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Swiper>
                                </div>
                            </Card>
                        </Col>
                        <ShopingInformation />
                    </Row>
                    <ProductRatting classname="flex-shrink-0" />
                </Container>
            </div>
            <ToastContainer />
        </React.Fragment >
    );
}

export default ProductDetails;