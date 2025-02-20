import React from 'react'
import "../testimonials/testimonials.css"
import {Data} from '../testimonials/Data'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
const Testimonials = () => {
  return (
   <section className="testimonial container section" id="testimonials">
    <h2 className="section__title"> What My Client Says</h2>
    <span className="section__subtitle">Testimonials</span>


        <Swiper className="testimonial__container"
       loop={true}
       grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,

          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
            {Data.map(({id, image, company,title, description})=> {

                return(
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className="testimonial__img"/> 
                       
                            <h2 className="testimonial__name">{title}</h2>
                            <h3 className="testimonial__company">{company}</h3>
                            <p className="testimonial__description">
                                {description}
                            </p>
                        </SwiperSlide>
                   
                )
            })}
        </Swiper>
   
   </section>
  );
};

export default Testimonials