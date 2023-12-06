import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icons from "../../../constants";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Navigation } from 'swiper/modules';
import {Title} from "../../Title.jsx";
import EmptyNutsItem from "./EmptyNutsItem.jsx";

export default function EmptyNuts() {
    return (
        <section className="empty-nuts">
            <div className="container">
                <div className="w-68">
                    <Title title='Թափուր Հաստիքներ'/>
                </div>

                <div className="empty-nuts-content">
                    <Swiper
                        slidesPerView={2}
                        grid={{
                            rows: 3
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Grid, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Մասնագիտացված տաղավարների եւ ֆիրմային խանութների պատասխանատու"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Բիզնես գործընթացների կառավարման մասնագետ"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Բիզնես գործընթացների կառավարման մասնագետ"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Մասնագիտացված տաղավարների եւ ֆիրմային խանութների պատասխանատու"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Մասնագիտացված տաղավարների եւ ֆիրմային խանութների պատասխանատու"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Մասնագիտացված տաղավարների եւ ֆիրմային խանութների պատասխանատու"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Մասնագիտացված տաղավարների եւ ֆիրմային խանութների պատասխանատու"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EmptyNutsItem
                                title="Մասնագիտացված տաղավարների եւ ֆիրմային խանութների պատասխանատու"
                                deadline="Վերջնաժամկետ"
                                date="03․02․23"
                                buttonText="ԴԻՄԵԼ"
                            />
                        </SwiperSlide>
                    </Swiper>

                    <div className="d-flex justify-content-center">
                        <img src={Icons.EMPTY_NUTS_IMG} alt="empty nuts" />
                    </div>
                </div>
            </div>
        </section>
    );
}
