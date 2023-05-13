import './Footer.css'

export const Footer = props =>{
    return(
        <div className='footerContainer'>
            <div>
                <img className='footerLine' style={{width: "100%"}} alt='' src={'assets/img/bigLine.svg'}></img>
            </div>
            <div className='footerElements'>
                <div className='footerSpan'>
                    <a>Copyright © Sugartech | Designed by Elmira - Powered by Sugar</a>
                </div>
                <div className='footerMediaButtons'>
                    <a href="https://mobile.twitter.com/TechnologySugar"><img alt='' src={'assets/img/facebookLogo.svg'}></img></a>
                    <a href="https://mobile.twitter.com/TechnologySugar"><img alt='' src={'assets/img/twitterLogo.svg'}></img></a>
                    <a href="https://www.linkedin.com/company/sugar-technology-ar/"><img alt='' src={'assets/img/linkedinLogo.svg'}></img></a>
                    <a href="https://www.instagram.com/sugartech.io/"><img alt='' src={'assets/img/instagramLogo.svg'}></img></a>
                </div>
            </div>
           
        </div>
    );
}