import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './Customers.css';

export const Customers = () => {
	const { t } = useTranslation();
	const [isTablet, setIsTablet] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 800);
			setIsTablet(window.innerWidth > 800 && window.innerWidth <= 1100);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const swiperSettings = {
		spaceBetween: isMobile ? 20 : 50,
		cssMode: true,
		navigation: true,
		modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay],
		className: "mySwiper",
		slidesPerView: isMobile ? 3.5 : 5,
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
		},
		style: {
			"--swiper-navigation-size": "30px",
		},
	};

	const images = [
		"/assets/img/bellona.svg",
		"/assets/img/doqu_home.svg",
		"/assets/img/istikbal.svg",
		"/assets/img/mondi.svg",
		"/assets/img/vivense.svg",
		"/assets/img/weltew.svg",
		"/assets/img/kys_design.svg",
		"/assets/img/tepe-home-min.svg",
		"/assets/img/vestel-logo-min.svg",
		"/assets/img/simurgLogo.svg",
		"/assets/img/lazzoni-logo.svg",
		"/assets/img/creavit_logo-min.svg",
		"/assets/img/ekohalilogo.svg",
		"/assets/img/tilia.svg",
		"/assets/img/kaas.svg",
		"/assets/img/gabba.svg",
		"/assets/img/homillia.svg",
		"/assets/img/homeandrugs.svg",
		"/assets/img/pasaj.svg",
	];

	return (
		<div className="customers-page" style={{ overflow: "hidden" }}>
			<Swiper {...swiperSettings} style={{ height: "25vh" }}>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img className="customers-slide-img" alt="" src={process.env.PUBLIC_URL + image}></img>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
