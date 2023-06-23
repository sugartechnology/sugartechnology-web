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
                <img className='paragraphImage' alt='' src={'./assets/img/paragraphImage1.webp'}></img>
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
            <div className='paragraph'>
                <ul className='secondParagraphLists'>
                    <li className='secondParagraphList'>{t("blog3ListItem1")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem2")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem3")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem4")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem5")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem6")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem7")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem8")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem9")}</li>
                    <li className='secondParagraphList'>{t("blog3ListItem10")}</li>
                </ul>
                <img alt='' src={'./assets/img/Ar-Filter.png'}></img>
                <a className='paragraphSpan'>{t("blogParagraph3Span10")}</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogParagraph3Span11")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span12")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span13")}</a>
                <img alt='' src={'./assets/img/iphone_evoloution.png'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogParagraph3Span14")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span15")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span16")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span17")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span18")}</a>
            </div>
            <img alt='' src={'./assets/img/istikbal_ar_deneyim.png'}></img>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogParagraph3Span19")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span20")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span21")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span22")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span23")}</a>
            </div>
            <img alt='' src={'./assets/img/3d_animation.gif'}></img>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogParagraph3Span24")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span25")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span26")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span27")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span28")}</a>
                <a className='paragraphSpan'>{t("blogParagraph3Span29")}</a>
                <img alt='' src={'./assets/img/sugar_metaverse_environment.png'}></img>
            </div>
            <div className='author'>
                <div className='authorImage'>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/SugarTeamLeader1.webp'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Abdurrahman Türkeri</a>
                    <a className='authorSpan'>{t("paragraphAuthor2Span")}</a>
                </div>
            </div>
        </div>
    );
}
