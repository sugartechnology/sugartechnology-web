import { useTranslation } from "react-i18next";
import './WhoSugar.css';

export const WhoSugar = () => {
	const { t } = useTranslation();
	return (
		<div className='WhoSugarContainer'>
			<div className='flyingElements1'>
				<a id='whoSugarImg1' href='/productAr'><img alt='' src={'./assets/img/WhoSugarLogos1.webp'}></img></a>
				<a id='whoSugarImg2' href='/productJoint'><img alt='' src={'./assets/img/WhoSugarLogos2.svg'} ></img></a>
				<a id='whoSugarImg3' href='/productMeta'><img alt='' src={'./assets/img/WhoSugarLogos3.webp'}></img></a>
				<a id='whoSugarImg4' href='/productShoes'><img alt='' src={'./assets/img/WhoSugarLogos4.svg'}></img></a>
				<a id='whoSugarImg5' href='/productWatch'><img alt='' src={'./assets/img/WhoSugarLogos5.webp'}></img></a>
				<a id='whoSugarImg6' href='/productClooth'><img alt='' src={'./assets/img/WhoSugarLogos6.svg'}></img></a>
			</div>
			<div className='whoSugarSpans'>
				<span className='whoSugarHeader'>{t("whoIsSugar")}</span>
				<span className='whoSugarSpan'>{t("whoSugarSpan1")}</span>
				<span className='whoSugarSpan'>{t("whoSugarSpan2")}</span>
				<li className="whatSugarProvidesList">{t('whatSugarProvides1')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides2')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides3')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides4')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides5')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides6')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides7')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides8')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides9')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides10')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides11')}</li>
				<li className="whatSugarProvidesList">{t('whatSugarProvides12')}</li>
			</div>
			<div className='whoSugarLogos'>
				<img className='whoSugarLogo1' alt='' src={'./assets/img/whoSugarImage.svg'}></img>
				<img className='whoSugarLogo2' alt='' src={'./assets/img/WhoSugarLogo7.webp'}></img>
			</div>
		</div>
	);
}