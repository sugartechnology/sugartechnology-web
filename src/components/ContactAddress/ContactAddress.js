import { useEffect, useState } from 'react';
import './ContactAddress.css';

export const ContactAddress = props => {
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
        <div className='contactAddressContainer' style={{ backgroundImage: 'URL("./assets/img/contactAddressBackground.webp")', backgroundSize: isMobile && "contain" }}>
            <div className='contactAddressInformation'>
                <div className='contactAddress'>
                    <img className='contactLogo2' alt='' src={'./assets/img/headerLogo.svg'}></img>
                    <div className='addressContainer'>
                        <div className='addressLogo'>
                            <img alt="" src={'assets/img/addressVector.svg'}></img>
                        </div>
                        <div className='addressSpan'>
                            <a>Kazlıçeşme Mah. 245. Sk.</a>
                            <a>No:5 Zeytinburnu / İstanbul</a>
                        </div>
                    </div>
                    <div className='mailAdressContainer'>
                        <div className='mailAdressLogo'>
                            <img alt="" src={'assets/img/mail.svg'}></img>
                        </div>
                        <div className='mailAdressSpan'>
                            <a>hello@sugartech.io</a>
                        </div>
                    </div>
                    <div className='phoneNumberContainer'>
                        <div className='phoneNumberLogo'>
                            <img alt='' src={'assets/img/phone-call.svg'}></img>
                        </div>
                        <div className='phoneNumberSpan'>
                            <a>444 06 93 </a>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1638.2123790132218!2d28.919188399896342!3d41.00349589708704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1680472239444!5m2!1str!2str"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="location">
                </iframe>
            </div>
            <div className='contactAddressInformationMobile'>
                <img className='contactLogoMobile' alt='' src={'./assets/img/headerLogo.svg'}></img>
                <div className='addressContainer'>
                    <div className='addressLogo'>
                        <img alt="" src={'assets/img/addressVector.svg'}></img>
                    </div>
                    <div className='addressSpanMobile'>
                        <a>Kazlıçeşme Mah. 245. Sk.</a>
                        <a>No:5 Zeytinburnu / İstanbul</a>
                    </div>
                </div>
                <div className='communicationAddress'>
                    <div className='phoneNumberContainer'>
                        <div className='phoneNumberLogo'>
                            <img alt='' src={'assets/img/phone-call.svg'}></img>
                        </div>
                        <div className='phoneNumberSpanMobile'>
                            <a>444 06 93</a>
                        </div>
                    </div>
                    <div className='mailAdressContainer'>
                        <div className='mailAdressLogo'>
                            <img alt="" src={'assets/img/mail.svg'}></img>
                        </div>
                        <div className='mailAdressSpanMobile'>
                            <a>hello@sugartech.io</a>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1638.2123790132218!2d28.919188399896342!3d41.00349589708704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1680472239444!5m2!1str!2str"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="locationMobile">
            </iframe>
        </div>
    );
}