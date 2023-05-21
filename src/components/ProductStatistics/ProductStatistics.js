import './ProductStatistics.css';
import { useTranslation} from "react-i18next";

export const ProductStatistics = props =>{
    const {t} = useTranslation();
    return(
        <div className='productStatisticsContainer'>
            <div className='productStatisticsSpanElementsDiv' style={{display: "flex", width: "88%", position: "relative"}}>
                <div className='productStatisticsSpanElements'>
                    <div className='productStatisticsHeaders'>
                        <a className='productStatisticsHeader'>{t("productStatisticsHeader")}</a>
                    </div>
                    <div className='productStatisticsSpans'>
                        <a className='productStatisticsSpan'>{t("productStatisticsSpan1")}</a>
                        <a className='productStatisticsSpan'>{t("productStatisticsSpan2")}</a>
                    </div>
                </div>
                <div className='productStatisticsImage'>
                    <img alt='' src={'./assets/img/productStatisticsImg.svg'}></img>
                </div>
            </div>
        </div>
    );
}