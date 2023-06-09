import './BlogsMain.css';
import { useTranslation} from "react-i18next";

export const BlogsMain = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsMainContainer'>
            <div className='squares'>
                
                    <div className='square' style={{backgroundImage: 'URL("./assets/img/blog1background.svg")'}}>
                        <a href='/sugarBlog1'><button className='squareButton'><a>{t("readMore")}</a></button></a>
                        <a className='squareHeader' href='/sugarBlog1'>{t("squareHeader1")}</a>
                        <div className='blogAuthor' id='blogAuthor1' style={{gap: "120px"}}>
                            <a className='squareHistory'>Feb 1, 2023</a>
                            <a className='squareHistory'>by Şükrü Erdem Şahin</a>
                        </div>
                    </div>
                
               
                    <div className='square' style={{backgroundImage: 'URL("./assets/img/blog2backgroundMobile.svg")'}}>
                        <a href='/sugarBlog2'><button className='squareButton'><a>{t("readMore")}</a></button></a>
                        <a className='squareHeader' href='/sugarBlog2'>{t("squareHeader2")}</a>
                        <div className='blogAuthor' id='blogAuthor2' style={{gap: "60px"}}>
                            <a className='squareHistory'>Mar 23, 2023</a>
                            <a className='squareHistory'>by Abdurrahman Türkeri</a>
                        </div>
                    </div>

                    <div className='square' style={{backgroundImage: 'URL("./assets/img/blog3backgroundMobile.svg")'}}>
                        <a href='/sugarBlog3'><button className='squareButton'><a>{t("readMore")}</a></button></a>
                        <a className='squareHeader' href='/sugarBlog3'>{t("squareHeader3")}</a>
                        <div className='blogAuthor' id='blogAuthor3' style={{gap: "190px"}}>
                            <a className='squareHistory'>May 12, 2023</a>
                            <a className='squareHistory'>by Abdurrahman Türkeri</a>
                        </div>
                    </div>
            </div>
        </div>
    );
}