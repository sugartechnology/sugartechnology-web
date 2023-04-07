import './Footer.css'

export const Footer = props =>{
    return(
        <div className='footerContainer'>
            <div>
                <img className='footerLine' style={{width: "1440px"}} alt='' src={'assets/img/bigLine.svg'}></img>
            </div>
            <div className='footerElements'>
                <div className='footerSpan'>
                    <a>Copyright © Sugartech | Designed by Elmira - Powered by Sugar</a>
                </div>
                <div className='footerMediaButtons'>
                    <img alt='' src={'assets/img/facebookLogo.svg'}></img>
                    <img alt='' src={'assets/img/twitterLogo.svg'}></img>
                    <img alt='' src={'assets/img/linkedinLogo.svg'}></img>
                    <img alt='' src={'assets/img/instagramLogo.svg'}></img>
                </div>
            </div>
           
        </div>
    );
}