import './Metaverse.css';
import { useTranslation} from "react-i18next";

export const Metaverse = props =>{
    const {t} = useTranslation();
    return(
        <div className='MetaverseContainer'>
            <div className='showAtHomeBubbles'>
                <img className='bubble1' alt='' src={'./assets/img/ShowAtHomeImg1.svg'} style={{}}></img>
                <img className='bubble2' alt='' src={'./assets/img/ShowAtHomeImg2.svg'} style={{position: "relative", top: "280px", right: "610px"}}></img>
                <img className='bubble3' alt='' src={'./assets/img/ShowAtHomeImg3.svg'} style={{position: "relative", right: "200px", bottom: "200px"}}></img>
                <img className='bubble4' alt='' src={'./assets/img/ShowAtHomeImg4.svg'} style={{position: "relative", left: "100px", bottom: "270px"}}></img>
                <img className='bubble5' alt='' src={'./assets/img/ShowAtHomeImg5.svg'} style={{position: "relative", left: "1205px", bottom: "300px"}}></img>
            </div>
            <div className='showAtHomeSpans'>
                <a className='showAtHomeHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                <a className='showAtHomeSpan'>Lorem ipsum dolor sit amet consectetur. Neque viverra mi at mattis nascetur eu quis risus netus.</a>
                <div className='showAtHomeButtons'>
                    <button className='showAtHomeButton1'><a>{t("getStarted")}</a></button>
                    <button className='showAtHomeButton2'><a>{t("readMore")}</a></button>
                </div>
            </div>
            <div>
                <img className='metaverseImage' alt='' src={'./assets/img/metaverseBackground.svg'}></img>
            </div>
        </div>
    );
}