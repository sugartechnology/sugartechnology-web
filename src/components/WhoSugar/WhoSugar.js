import './WhoSugar.css';
import { useTranslation} from "react-i18next";

export const WhoSugar = props =>{
    const {t} = useTranslation();
    return(
        <div className='WhoSugarContainer'>
            <div className='flyingElements'>
                <img alt='' src={'./assets/img/WhoSugarLogos1.svg'} style={{position:"relative", top:"200px"}}></img>
                <img alt='' src={'./assets/img/WhoSugarLogos2.svg'} style={{position:"relative", top:"50px", right:"80px"}}></img>
                <img alt='' src={'./assets/img/WhoSugarLogos3.svg'} style={{position:"relative", right:"50px", bottom:"30px"}}></img>
                <img alt='' src={'./assets/img/WhoSugarLogos4.svg'}></img>
                <img alt='' src={'./assets/img/WhoSugarLogos5.svg'} style={{position:"relative", left:"80px", bottom:"30px"}}></img>
                <img alt='' src={'./assets/img/WhoSugarLogos6.svg'} style={{position:"relative", top:"200px"}}></img>
            </div>
            <div className='whoSugarSpans'>
                <a className='whoSugarHeader'>{t("whoIsSugar")}</a>
                <a className='whoSugarSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices. </a>
                <a className='whoSugarSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar.</a>
            </div>
            <div className='whoSugarLogos'>
                <img className='whoSugarLogo1' alt='' src={'./assets/img/sketch_business.svg'}></img>
                <img className='whoSugarLogo2' alt='' src={'./assets/img/WhoSugarLogo7.svg'}></img>
            </div>
        </div>
    );
}