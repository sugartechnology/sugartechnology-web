import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs4 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphs4Container'>
            <div className='paragraph' style={{marginTop: "40px"}}>
                <a className='paragraphHeader'>{t("paragraphHeader4")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span1")}</a>
                <img alt='' src={'./assets/img/blog4Image1.jpg'}></img>
            </div>
            
            <div className='paragraph'>
                <a className='paragraphSpan'>{t("blogParagraph4Span2")}</a>
                <img alt='' src={'./assets/img/blog4Image2.jpg'}></img>
                <a className='paragraphSpan'>{t("blogParagraph4Span3")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span4")}</a>
                <img alt='' src={'./assets/img/blog4Image3.jpg'}></img>
                <a className='paragraphSpan'>{t("blogParagraph4Span5")}</a>
                <img alt='' src={'./assets/img/blog4Image4.jpeg'}></img>
                <a className='paragraphSpan'>{t("blogParagraph4Span6")}</a>
            </div>
            
            <div className='videoParagraph'>
            <video controls style={{width: "100%"}}>
                <source src={'./assets/videos/videoplayback.mp4'} type='video/mp4' />
            </video>
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
