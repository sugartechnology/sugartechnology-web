import { Swiper, SwiperSlide } from "swiper/react";

import './Customers.css'
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";
import { useTranslation} from "react-i18next";

 
export const Customers = props =>{

    
    const {t} = useTranslation();
    return(
    <Swiper spaceBetween={50}  style={{height: "270px", minHeight:"50px"}} navigation={true}  id="123"
        cssMode={true}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={60}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 4
        }}
        keyboard={{
            enabled: true,
          }}
        mousewheel={{
            enabled: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
        }}
      >
        <a className="customersSpan">{t("homePageCustomersSpan")}</a>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/bellona.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/doqu_home.webp'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/istikbal.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/mondi.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/vivense.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/weltew.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/kys_design.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/tepe-home-min.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/vestel-logo-min.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/new-logo.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/simurg_sanatevi-min.png'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/lazzoni-logo.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/creavit_logo-min.svg'}></img></SwiperSlide>
        <SwiperSlide><img alt="" src={process.env.PUBLIC_URL + '/assets/img/ekohalilogo.png'}></img></SwiperSlide>
    </Swiper>);
}