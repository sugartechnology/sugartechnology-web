import './CloothPatern.css';
import { useTranslation} from "react-i18next";

export const CloothPatern = props =>{
    const {t} = useTranslation();
    return(
        <div className='cloothPaternContainer'>
            <div className='cloothPaternSpans'>
                <a className='cloothPaternHeader'>{t("cloothPaternHeader")}</a>
                <a className='cloothPaternSpan'>{t("cloothPaternSpan")}</a>
            </div>
            <div className='cloothPaternElements'>
                <img className='cloothPaternImage1' alt='' src={'./assets/img/cloothPaternImage1.webp'}></img>
                <img className='cloothPaternVector' alt='' src={'./assets/img/cloothPaternVector.svg'}></img>
                <img className='cloothPaternImage2' alt='' src={'./assets/img/cloothPaternImage2.webp'}></img>
            </div>
        </div>
    );
}