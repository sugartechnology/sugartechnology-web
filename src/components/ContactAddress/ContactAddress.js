import './ContactAddress.css';

export const ContactAddress = props =>{
    return(
        <div className='contactAddressContainer'>
            <img className='contactBackground' alt='' src={'./assets/img/contactAddressBackground.svg'} style={{width:"100%"}}></img>
            <div className='contactAddressInformation'>
                <div className='contactAddress'>
                    <img className='contactLogo' alt='' src={'./assets/img/headerLogo.svg'}></img>
                    <div className='addressContainer'>
                        <div className='addressLogo'>
                            <img alt="" src={'assets/img/addressVector.svg'}></img>
                        </div>
                        <div className='addressSpan'>
                            <a>Kazlıçeşme mah. 245. Sk.</a>
                            <a>No:5 Zeytinburnu / İstanbul</a>
                        </div>
                    </div>
                    <div className='mailAdressContainer'>
                        <div className='mailAdressLogo'>
                            <img alt="" src={'assets/img/mail.svg'}></img>
                        </div>
                        <div className='mailAdressSpan'>
                            <a>Sugar@sugartech.io</a>
                            <a>aturkeri@sugartech.io</a>
                        </div>
                    </div>
                    <div className='phoneNumberContainer'>
                        <div className='phoneNumberLogo'>
                            <img alt='' src={'assets/img/phone-call.svg'}></img>
                        </div>
                        <div className='phoneNumberSpan'>
                            <a>+90 534 284 3427</a>
                            <a>+001 6547 6589</a>
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
                            <a>Kazlıçeşme mah. 245. Sk.</a>
                            <a>No:5 Zeytinburnu / İstanbul</a>
                        </div>
                </div>
                <div className='communicationAddress'>
                    <div className='phoneNumberContainer'>
                        <div className='phoneNumberLogo'>
                            <img alt='' src={'assets/img/phone-call.svg'}></img>
                        </div>
                        <div className='phoneNumberSpanMobile'>
                            <a>+90 534 284 3427</a>
                            <a>+001 6547 6589</a>
                        </div>
                    </div>
                    <div className='mailAdressContainer'>
                        <div className='mailAdressLogo'>
                            <img alt="" src={'assets/img/mail.svg'}></img>
                        </div>
                        <div className='mailAdressSpanMobile'>
                            <a>Sugar@sugartech.io</a>
                            <a>aturkeri@sugartech.io</a>
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