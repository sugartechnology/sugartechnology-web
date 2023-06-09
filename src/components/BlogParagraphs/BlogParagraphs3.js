import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs3 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphs3Container'>
            <div className='paragraph' style={{marginTop: "40px"}}>
                <a className='paragraphHeader'>{t("paragraphHeader3")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span1")}</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogParagraph3Span2")}</a>
                <ul className='secondParagraphLists'>
                    <li className='secondParagraphList'>{t("paragraphList3Span3")}</li>
                    <li className='secondParagraphList'>{t("paragraphList3Span4")}</li>
                </ul>
                <img className='paragraphImage' alt='' src={'./assets/img/paragraphImage1.svg'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphSpan'>{t("blogParagraph3Span5")}</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogParagraph3Span6")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span7")}</a>
                <img className='paragraphImage'alt='' src={'assets/img/paragraphImage5.jpeg'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphSpan'>{t("blogParagraph3Span8")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span9")}</a>
            </div>
            <div className='paragraphWithImage'>
                <img className='paragraphImage2' alt='' src={'./assets/img/sanal_gerceklik_gozlugu.png'}></img>
                <ul className='secondParagraphLists'>
                    <li className='secondParagraphLists'>{t("blog3ListItem1")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem2")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem3")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem4")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem5")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem6")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem7")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem8")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem9")}</li>
                    <li className='secondParagraphLists'>{t("blog3ListItem10")}</li>
                </ul>
            </div>
            <div className='author'>
                <div className='authorImage'>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Abdurrahman Türkeri</a>
                    <a className='authorSpan'>{t("paragraphAuthor2Span")}</a>
                </div>
            </div>
        </div>
    );
}
