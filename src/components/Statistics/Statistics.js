import './Statistics.css';
import { useTranslation} from "react-i18next";

export const Statistics = props =>{
    const {t} = useTranslation();
    return(
        <div className='statisticsContainer'>
            <div className='leftStatictics'>
                <a className='firstSpan'>90</a>
                <a className='secondSpan'>{t("companyCustomer")}</a>
                <a className='thirdSpan'>Lorem ipsum dolor sit amet consectetur.</a>
            </div>
            <div className='rightStatictics'>
                <a className='firstSpan'>100,400+</a>
                <a className='secondSpan'>{t("project")}</a>
                <a className='thirdSpan'>Lorem ipsum dolor sit amet consectetur.</a>
            </div>
        </div>
    );
}