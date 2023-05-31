import './BlogsInfo.css';
import { useTranslation} from "react-i18next";

export const BlogsInfo = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsInfoContainer'>
            <div className='blogsInfoHeaders'>
                <a className='blogsInfoHeader'>{t("blogInfoHeader")}Lorem ipsum dolor sit amet consectetur.</a>
                <a className='blogsInfoSpan'>{t("blogInfoSpan")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                <a href='/'>
                    <button className='blogsInfoButton'><a>{t("readMore")}</a></button>
                </a>
            </div>
            <div className='blogsInfoImages'>
                <img className='blogsInfoImage' alt='' src={'./assets/img/blogsInfoImage.svg'}></img>
            </div>
            <div className='blogsInfoItems'>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>{t("blogsInfoItemHeader1")}Lorem ipsum </a>
                    <a className='blogsInfoItemSpan'>{t("blogsInfoItemSpan1")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. </a>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>{t("blogsInfoItemHeader2")}Lorem ipsum </a>
                    <a className='blogsInfoItemSpan'>{t("blogsInfoItemSpan2")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. </a>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>{t("blogsInfoItemHeader3")}Lorem ipsum </a>
                    <a className='blogsInfoItemSpan'>{t("blogsInfoItemSpan3")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. </a>
                </div>
            </div>
        </div>
    );
}