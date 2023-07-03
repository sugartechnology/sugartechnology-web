import React, { useState, useEffect } from 'react';
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
                        <a className='cookiesHeader'>{t("cookiesHeader")}</a>
                        <a className='cookiesSpan'>{t("cookiesSpan")}</a>
                    </div>
                    <div className='cookiesButtons'>
                        <button onClick={closeCookies} className='cookiesButton1'><a>{t("declineButton")}</a></button>
                        <button onClick={closeCookies} className='cookiesButton2'><a>{t("acceptButton")}</a></button>
                    </div>
                </div>
            )}
        </>
    );
};
