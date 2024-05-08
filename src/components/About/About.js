import { useTranslation } from "react-i18next";
import './About.css';

export const About = () => {
	const { t } = useTranslation();
	return (
		<div className='about-container'>
			<h2 className='about-header'>{t("aboutSugar")}</h2>
			<div className='about-spans'>
				<p className='about-span'>{t("aboutSugarSpan1")}</p>
				<p className='about-span'>{t("aboutSugarSpan2")}</p>
				<a href='/aboutUs' className='about-button'>{t("aboutButton")}</a>
			</div>
			<img className='about-image' alt='' src={'./assets/img/firstAboutLogo.webp'}></img>
			<img className='about-background-shape' alt='' src={'assets/img/Objeto_inteligente.webp'}></img>
		</div>
	);
}