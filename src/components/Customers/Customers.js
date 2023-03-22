import { Swiper, SwiperSlide } from "swiper/react";

import './Customers.css'
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";

 
export const Customers = props =>{

    

    return(<Swiper spaceBetween={50}  style={{height: "100px", minHeight:"50px"}} navigation={true}  id="123"
        cssMode={true}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
            enabled: true,
          }}
        mousewheel={{
            enabled: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/bellona.png'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/doqu_home.webp'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/istikbal.png'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/mondi.png'}></img></SwiperSlide>
    </Swiper>);
}