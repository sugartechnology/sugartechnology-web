import './BlogsMain.css';
import { useTranslation} from "react-i18next";

export const BlogsMain = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsMainContainer'>
            <div className='squares'>
                
                    <div className='square' style={{backgroundImage: 'URL("./assets/img/blog1background.webp")'}}>
                        <a href='/sugarBlog1'><button className='squareButton'><a>{t("readMore")}</a></button></a>
                        <a className='squareHeader' href='/sugarBlog1'>{t("squareHeader1")}</a>
                        <div className='blogAuthor' id='blogAuthor1'>
                            <a className='squareHistory'>Feb 1, 2023</a>
                            <a className='squareHistory'>by Şükrü Erdem Şahin</a>
                        </div>
                    </div>
                
               
                    <div className='square' style={{backgroundImage: 'URL("./assets/img/blog2backgroundMobile.webp")'}}>
                        <a href='/sugarBlog2'><button className='squareButton'><a>{t("readMore")}</a></button></a>
                        <a className='squareHeader' href='/sugarBlog2'>{t("squareHeader2")}</a>
                        <div className='blogAuthor' id='blogAuthor2'>
                            <a className='squareHistory'>Mar 23, 2023</a>
                            <a className='squareHistory'>by Abdurrahman Türkeri</a>
                        </div>
                    </div>

                    <div className='square' style={{backgroundImage: 'URL("./assets/img/blog3backgroundMobile.webp")'}}>
                        <a href='/sugarBlog3'><button className='squareButton'><a>{t("readMore")}</a></button></a>
                        <a className='squareHeader' href='/sugarBlog3'>{t("squareHeader3")}</a>
                        <div className='blogAuthor' id='blogAuthor3'>
                            <a className='squareHistory'>May 12, 2023</a>
                            <a className='squareHistory'>by Abdurrahman Türkeri</a>
                        </div>
                    </div>

                    <div className='square' style={{backgroundImage: 'URL("./assets/img/products/tablo.svg")'}}>
                        <a href='/sugarBlog4'><button className='squareButton'><a>{t("readMore")}</a></button></a>
                        <a className='squareHeader' href='/sugarBlog4'>{t("squareHeader4")}</a>
                        <div className='blogAuthor' id='blogAuthor3'>
                            <a className='squareHistory' >Haziran 12, 2023</a>
                            <a className='squareHistory'>by Kübra Yıldız</a>
                        </div>
                    </div>
            </div>
        </div>
    );
}