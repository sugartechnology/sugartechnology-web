import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BlogsPage.css';

export const BlogsPage = ({ thumbs, urls }) => {
	const i18n = useTranslation();
	const swiperSettings = {
		className: "blogs-swiper",
		modules: [Navigation],
		speed: 1000,
		initialSlide: 0,
		mousewheel: true,
		centeredSlides: true,
		slideToClickedSlide: true,
		spaceBetween: 20,
		slidesPerView: "auto",
		style: { padding: "10px 0" },
	};


	return (
		<div className='page-margin' style={{ marginTop: "70px", padding: "20px 0" }}>
			<Suspense fallback={<div>Loading</div>}>{/* will be added */}
				<Swiper {...swiperSettings}>
					{thumbs && thumbs.length > 0 && thumbs.map((thumb, index) => (
						urls[index][i18n.i18n.language] && thumb &&
						<SwiperSlide key={index}
							className='blog-swiper-slide'
							style={{ width: "auto", height: "100%" }}>
							<Link to={`/blog${index}`}>
								<img src={thumb.split(';')[0]} alt='blog-thumb' loading='lazy'/>
							</Link>
						</SwiperSlide>
					)
					)}
				</Swiper>
			</Suspense>
		</div>
	);
};