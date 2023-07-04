import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs4 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphs4Container'>
            <div className='paragraph' style={{marginTop: "40px"}}>
                <a className='paragraphHeader'>{t("paragraphHeader4")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span1")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span2")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span3")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span4")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span5")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span6")}</a>
            </div>

            <div className='paragraph'>
                <img alt='' src={'./assets/img/blog4Image1.jpg'}></img>
                <a className='paragraphHeader'>{t("paragraphHeader5")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span7")}</a>
                <ul className='secondParagraphLists'>
                    <li className='secondParagraphList'>{t("blog4ListItem1")}</li>
                    <li className='secondParagraphList'>{t("blog4ListItem2")}</li>
                    <li className='secondParagraphList'>{t("blog4ListItem3")}</li>
                    <li className='secondParagraphList'>{t("blog4ListItem4")}</li>
                </ul>
                <a className='paragraphSpan'>{t("blogParagraph4Span8")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span9")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span10")}</a>
            </div>

            <div className='videoParagraph'>
                <video controls style={{width: "100%"}}>
                    <source src={'./assets/videos/videoplayback.mp4'} type='video/mp4' />
                </video>
            </div>

            <div className='paragraph'>
                <a className='paragraphHeader'>{t("paragraphHeader6")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span11")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span12")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span13")}</a>
            </div>

            <div className='paragraph'>
                <img alt='' src={'./assets/img/blog4Image3.jpg'}></img>
                <a className='paragraphHeader'>{t("paragraphHeader7")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span14")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span15")}</a>
                <a className='paragraphSpan'>{t("blogParagraph4Span16")}</a>
                <img alt='' src={'./assets/img/blog4Image4.jpeg'}></img>
                <img alt='' src={'./assets/img/blog4Image2.jpg'}></img>
            </div>
            
            <div className='author'>
                <div className='authorImage'>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/kubraPp.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Kübra Yıldız</a>
                    <a className='authorSpan'>{t("paragraphAuthor3Span")}AR, VR, AI teknolojilerine dayalı çözümler ile gerçek hayat problemlerinin çözülmesini sağlayan ürünler geliştiriyor ve bu ürünleri müşterilerimizi dahil ederek geliştiriyoruz.</a>
                </div>
            </div>
        </div>
    );
}
