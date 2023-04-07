import './ArDetails.css';
import { useTranslation} from "react-i18next";

export const ArDetails = props =>{
    const {t} = useTranslation();
    return(
        <div className='arDetailsContainer'>
            <div className='arDetailsSpans'>
                <a className='arDetailsHeader'>{t("ArDetails")}</a>
                <a className='arDetailsSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.</a>
                <img className='showAtHomeImg' id='option1Img' alt='' src={'./assets/img/sugar-model-viewer2.svg'} style={{display: "flex",position: "absolute", top: "1240px", left: "300px"}}></img>
            </div>
            <img className='arDetailsShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            <img alt='' src={'./assets/img/ArDetailsImg2.svg'} style={{position: "absolute", top: "1100px", right: "700px", zIndex: "-1"}}></img>
        </div>
    );
}