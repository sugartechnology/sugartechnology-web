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
						<span>Merkez Mh., Kağıthane Cd.</span>
						<span>Dap Vadisi A Ofis No 11 D:62</span>
                        <span>Kağıthane İstanbul</span>
                        </div>
                    </div>
                    <div className='mailAdressContainer'>
                        <div className='mailAdressLogo'>
                            <img alt="" src={'assets/img/mail.svg'}></img>
                        </div>
                        <div className='mailAdressSpan'>
                            <span>hello@sugartech.io</span>
                        </div>
                    </div>
                    <div className='phoneNumberContainer'>
                        <div className='phoneNumberLogo'>
                            <img alt='' src={'assets/img/phone-call.svg'}></img>
                        </div>
                        <div className='phoneNumberSpan'>
                            <span>444 06 93 </span>
                        </div>
                    </div>
                </div>
				<iframe
					title="location"
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d751.92916176656!2d28.971320269667533!3d41.075186009198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA0JzMwLjciTiAyOMKwNTgnMTkuMSJF!5e0!3m2!1sen!2str!4v1715773645622!5m2!1sen!2str"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
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
						<span>Merkez Mh., Kağıthane Cd.</span>
						<span>Dap Vadisi A Ofis No 11 D:62</span>
                        <span>Kağıthane İstanbul</span>
                    </div>
                </div>
                <div className='communicationAddress'>
                    <div className='phoneNumberContainer'>
                        <div className='phoneNumberLogo'>
                            <img alt='' src={'assets/img/phone-call.svg'}></img>
                        </div>
                        <div className='phoneNumberSpanMobile'>
                            <span>444 06 93</span>
                        </div>
                    </div>
                    <div className='mailAdressContainer'>
                        <div className='mailAdressLogo'>
                            <img alt="" src={'assets/img/mail.svg'}></img>
                        </div>
                        <div className='mailAdressSpanMobile'>
                            <span>hello@sugartech.io</span>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
				title="location"
				src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d751.92916176656!2d28.971320269667533!3d41.075186009198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA0JzMwLjciTiAyOMKwNTgnMTkuMSJF!5e0!3m2!1sen!2str!4v1715773645622!5m2!1sen!2str"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="locationMobile">
            </iframe>
        </div>
    );
}