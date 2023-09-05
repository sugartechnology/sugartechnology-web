import './ListenToPartner.css';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

export const FurniturePartner = props => {
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

    return (
        <div className='listenToPartnerContainer'>
            <div className='partner1'>
                <img className='containerTopLogo' alt='' src={'./assets/img/ListenToPartnerImg1.svg'} ></img>
                <div className='partnerHeaders'>
                    <img className='partnerLogo' alt='' src={'./assets/img/tepe-home-min.svg'} ></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img className='spanBottomLogo' alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{ position: "absolute", right: "10px", top: "70px" }}></img>
                </div>
                <div className='partnerSpans' style={{ display: "flex" }}>
                    <a className='partnerSpan'>{t("tepeHomeComments")}</a>
                </div>
                <div className='partnerVideo'>
                    <iframe className='partnerVideos' style={{ width: "90%", alignSelf: "center" }} src="https://www.youtube.com/embed/C-aoRasmfX8" frameBorder="0" allowFullScreen></iframe>
                    <img className='partnerVideoShadow' id='deskopVideoShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
                </div>
            </div>
        </div>
    );
}