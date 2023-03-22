import './Contact.css'

export const Contact = props =>{
    return(
        <div className='contactContainer'>
            <div className='leftContact'>
                <div className='about'>
                    <img className='contactLogo' alt="" src={'assets/img/headerLogo.svg'}></img>
                    <a className='aboutSpan'>Lorem ipsum dolor sit amet consectetur. Ipsum in neque gravida donec fringilla fames in et. </a>
                </div>
                <div className='communication'>
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
            </div>
            <div className='middleContact'>
                <div className='pages'>
                    <div className='contactHeaders'>
                        <a>Pages</a>
                        <img alt='' src={'assets/img/littleLine.svg'}></img>
                    </div>
                    <div className='contactRouters'>
                        <a>Home</a>
                        <a>About Us</a>
                        <a>Integrations</a>
                        <a>Pricing</a>
                        <a>Features</a>
                        <a>Contact Us</a>
                    </div>
                </div>
                <div className='utilityPages'>
                    <div className='contactHeaders'>
                        <a>Utility Pages</a>
                        <img alt='' src={'assets/img/littleLine.svg'}></img>
                    </div>
                    <div className='contactRouters'>
                        <a>Password</a>
                        <a>Protected</a>
                        <a>404 Not Found</a>
                        <a>StyleGuide</a>
                        <a>Licenses</a>
                        <a>Changelog</a>
                    </div>
                </div>
            </div>
            <div className='rightContact'>
                <div className='contactHeaders'>
                    <a>Contact Us</a>
                </div>
                <div className='rightContactInputs'>
                    <a>Enter your name and email, send your massage to us.</a>
                    <input className='nameInput' placeholder='Name'></input>
                    <input className='emailInput' placeholder='Email'></input>
                    <input className='messageInput' placeholder='Message'></input>
                    <button className='sendButton'>
                        <a>Send</a>
                    </button>
                </div>
            </div>
        </div>
    );
}