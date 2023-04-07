import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphsContainer'>
            <div className='paragraph' style={{marginTop:"40px"}}>
                <a className='paragraphHeader'>{t("blogPageHeader1")}</a>
                <a className='paragraphSpan'>{t("blogParagraphSpan1")}</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeader2")}</a>
                <ol className='secondParagraphLists'>
                    <li className='secondParagraphList'>{t("paragraphListSpan1")}</li>
                    <li className='secondParagraphList'>{t("paragraphListSpan1")}</li>
                </ol>
                <img className='paragraphImage' alt='' src={'./assets/img/paragraphImage1.svg'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphSpan'>{t("blogParagraphSpan2")}</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeaderBreakfast")}</a>
                <a className='paragraphSpan'>{t("blogParagraphSpan3")}</a>
                <img className='paragraphImage'alt='' src={'assets/img/paragraphImage2.svg'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeader4")}</a>
                <a className='paragraphSpan'>{t("blogParagraphSpan3")}</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeaderBreakfast")}</a>
                <a className='paragraphSpan'>{t("blogParagraphSpan4")}</a>
            </div>
            <div className='author'>
                <div className='authorImage'>
                    <img alt='' src={'./assets/img/authorImage.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Irving Suarez</a>
                    <a className='authorSpan'>{t("paragraphAuthorSpan")}</a>
                </div>
            </div>
        </div>
    );
}
