import { Swiper, SwiperSlide } from "swiper/react";
import './Customers.css'
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";
import { useTranslation} from "react-i18next";

 
export const Customers = props => {
  const { t } = useTranslation();

  const swiperSettings = {
    spaceBetween: 50,
    cssMode: true,
    navigation: true,
    modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay],
    className: "mySwiper",
    slidesPerView: 5,
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
    }
  };

  return (
    
    <div>
      
      <Swiper {...swiperSettings} style={{height: "25vh"}}>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/bellona.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/doqu_home.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/istikbal.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/mondi.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/vivense.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/weltew.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/kys_design.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/tepe-home-min.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/vestel-logo-min.svg"}></img>
        </SwiperSlide>
    
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/simurgLogo.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/lazzoni-logo.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={process.env.PUBLIC_URL + "/assets/img/creavit_logo-min.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img alt="" src={process.env.PUBLIC_URL + "/assets/img/ekohalilogo.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img alt="" src={process.env.PUBLIC_URL + "/assets/img/tilia.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img alt="" src={process.env.PUBLIC_URL + "/assets/img/kaas.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img alt="" src={process.env.PUBLIC_URL + "/assets/img/gabba.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img alt="" src={process.env.PUBLIC_URL + "/assets/img/homillia.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img alt="" src={process.env.PUBLIC_URL + "/assets/img/homeandrugs.svg"}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img alt="" src={process.env.PUBLIC_URL + "/assets/img/pasaj.svg"}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
