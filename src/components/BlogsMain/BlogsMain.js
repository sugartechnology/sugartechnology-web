import './BlogsMain.css';
import { useTranslation} from "react-i18next";

export const BlogsMain = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsMainContainer'>
            <div className='squares'>
                <div className='square' style={{height: "479px"}}>
                    <button className='squareButton'><a href='/sugarBlog1'>{t("readMore")}</a></button>
                    <a className='squareHeader' href='/sugarBlog1'>{t("squareHeader1")}</a>
                    <div className='blogAuthor' id='blogAuthor1' style={{gap: "120px"}}>
                        <a className='squareHistory'>Feb 1, 2023</a>
                        <a className='squareHistory'>by Şükrü Erdem Şahin</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/blog1background.svg'}></img>
                </div>
                <div className='square' style={{height: "479px", width: "22%"}}>
                    <button className='squareButton'><a href='/sugarBlog2'>{t("readMore")}</a></button>
                    <a className='squareHeader' href='/sugarBlog2'>{t("squareHeader2")}</a>
                    <div className='blogAuthor' id='blogAuthor2' style={{gap: "60px"}}>
                        <a className='squareHistory'>Mar 23, 2023</a>
                        <a className='squareHistory'>by Abdurrahman Türkeri</a>
                    </div>
                    <img className='squareImg' id='squareImgDeskop' alt='' src={'./assets/img/blog2background.svg'}></img>
                    <img className='squareImg' id='squareImgMobile' alt='' src={'./assets/img/blog2backgroundMobile.svg'}></img>
                </div>
                <div className='square' style={{height: "479px", width: "31%"}}>
                    <button className='squareButton'><a href='/sugarBlog3'>{t("readMore")}</a></button>
                    <a className='squareHeader' href='/sugarBlog3'>{t("squareHeader3")}</a>
                    <div className='blogAuthor' id='blogAuthor3' style={{gap: "190px"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Abdurrahman Türkeri</a>
                    </div>
                    <img className='squareImg' id='squareImgDeskop' alt='' src={'./assets/img/blog3background.svg'}></img>
                    <img className='squareImg' id='squareImgMobile' alt='' src={'./assets/img/blog3backgroundMobile.svg'}></img>
                </div>
            </div>
        </div>
    );
}