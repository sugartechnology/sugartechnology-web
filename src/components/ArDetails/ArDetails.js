import './ArDetails.css';
import { useTranslation} from "react-i18next";

export const ArDetails = props =>{
    const {t} = useTranslation();
    return(
        <div className='arDetailsContainer'>
            <div className='arDetailsSpans'>
                <a className='arDetailsHeader'>{t("ArDetails")}</a>
                <a className='arDetailsSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.</a>
            </div>
            <div className='arDetailsOptions'>
                <div className='option1' style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <a>{t("changeMaterial")}</a>
                    <img alt='' src={'./assets/img/ArDetailsOptionLine.svg'}></img>
                </div>
                <div className='option2' style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <a style={{}}>{t("arSeeHome")}</a>
                    <img alt='' src={'./assets/img/ArDetailsOptionLine.svg'}></img>
                </div>
                <div className='option3' style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <a>{t("joint")}</a>
                    <img alt='' src={'./assets/img/ArDetailsOptionLine.svg'}></img>
                </div>
            </div>
        </div>
    );
}
