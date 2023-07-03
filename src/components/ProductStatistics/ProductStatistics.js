import './ProductStatistics.css';
import { useTranslation} from "react-i18next";

export const ProductStatistics = props =>{
    const {t} = useTranslation();
    return(
        <div className='productStatisticsContainer'>
            <div className='productStatisticsSpanElementsDiv'>
                <div className='productStatisticsSpanElements'>
                    <div className='productStatisticsHeaders'>
                        <a className='productStatisticsHeader'>{t("productStatisticsHeader")}</a>
                    </div>
                    <div className='productStatisticsSpans'>
                        <a className='productStatisticsSpan'>{t("productStatisticsSpan1")} <a href='https://www.facebook.com/business/success/2-made-com' target='_blank'>Made.com UseCase</a></a>
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