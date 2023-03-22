import './Header.css'


export const Header = props => {
    return(
        <div className="headerContainer" style={{width: "1439px", height: "100px"}}>
            <div className="sugarLogo">
                <img alt="" src={'assets/img/headerLogo.svg'}></img>
            </div>
            <div className="routers">
                <a>Home</a>
                <a>Product / Services</a>
                <a>About Us</a>
                <a>Blog</a>
                <a>Contact Us</a>
            </div>
            <div className="headerButtons">
                <div className='languageButton'>
                    <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag.svg'}></img>
                    <a className='languageSpan'>English</a>
                    <img className='languageShowButton' alt='' src={'assets/img/Chevron.svg'}></img>
                </div>
                <button className='mediaCenterButton'>
                    <a>Media Center</a>
                </button>
            </div>
        </div>
    );
}