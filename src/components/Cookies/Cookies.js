import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import './Cookies.css';

export const Cookies = () => {
	const { t } = useTranslation();
	const [showPopup, setShowPopup] = useState(true);

	useEffect(() => {
		const isConsented = localStorage.getItem('cookieConsent');
		if (isConsented === 'true') {
			setShowPopup(false);
		}
	}, []);

	const closeCookies = () => {
		setShowPopup(false);
		localStorage.setItem('cookieConsent', 'true');
	};

	return (
		<>
			{showPopup && (
				<div className="cookiesContainer">
					<div className='cookiesCloseDiv'>
						<img className='cookiesCloseButton' onClick={closeCookies} alt='' src={'./assets/img/popupVector2.svg'}></img>
					</div>
					<div className='cookiesSpans'>
						<span className='cookiesHeader'>{t("cookiesHeader")}</span>
						<span className='cookiesSpan'>{t("cookiesSpan")}</span>
					</div>
					<div className='cookiesButtons'>
						<button onClick={closeCookies} className='cookiesButton1'>
							<span>
								{t("declineButton")}
							</span>
						</button>
						<button onClick={closeCookies} className='cookiesButton2'>
							<span>
								{t("acceptButton")}
							</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
};
