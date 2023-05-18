import './TryWatch.css';
import { useTranslation} from "react-i18next";

export const TryWatch = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryWatchContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryWatchContainerHeader")}Birliktelik Kuralları</a>
                <a className='jointAboutSpan'>{t("tryWatchContainerSpan")}Birliktelik kuralları ile ürünlerin birleşimleri müşteri tarafından yapılabilir. Müşteri kendi köşesini (koltuk, gardrop vb.) yaratabilir.</a>
                <img className='jointAboutImage' alt='' src={'./assets/img/tryWatchImage.svg'}></img>
                <img className='jointShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}