import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphsContainer'>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeader2")}</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}</a>
                <a className='secondParagraphList'>{t("paragraphListSpan2")}</a>
                <a className='secondParagraphList'>{t("paragraphListSpan3")}</a>
                <a className='secondParagraphList'>{t("paragraphListSpan4")}</a>
            </div>
            
            <div className='author'>
                <div className='authorImage'>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/erdemPp.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Şükrü Erdem Şahin</a>
                    <a className='authorSpan'>{t("paragraphAuthorSpan")}</a>
                </div>
            </div>
        </div>
    );
}
