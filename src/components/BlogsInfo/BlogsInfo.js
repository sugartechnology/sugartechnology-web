import './BlogsInfo.css';
import { useTranslation} from "react-i18next";

export const BlogsInfo = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsInfoContainer'>
            <div className='blogsInfoHeaders'>
                <a className='blogsInfoHeader'>{t("blogInfoHeader")}</a>
                <a className='blogsInfoSpan'>{t("blogInfoSpan")}</a>
                <button className='blogsInfoButton'><a>{t("readMore")}</a></button>
            </div>
            <div className='blogsInfoImages'>
                <img className='blogsInfoImage' alt='' src={'./assets/img/blogsInfoImage.svg'}></img>
            </div>
            <div className='blogsInfoItems'>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>{t("blogsInfoItemHeader1")}</a>
                    <a className='blogsInfoItemSpan'>{t("blogsInfoItemSpan1")}</a>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>{t("blogsInfoItemHeader2")}</a>
                    <a className='blogsInfoItemSpan'>{t("blogsInfoItemSpan2")}</a>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>{t("blogsInfoItemHeader3")}</a>
                    <a className='blogsInfoItemSpan'>{t("blogsInfoItemSpan3")}</a>
                </div>
            </div>
        </div>
    );
}