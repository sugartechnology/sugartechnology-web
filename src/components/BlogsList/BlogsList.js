import './BlogsList.css';
import { useTranslation} from "react-i18next";

export const BlogsList = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsListContainer'>
            <div className='blogsListHeaders'>
                <a className='blogsListHeader'>{t("blogListHeader")}</a>
            </div>
            <div className='blogsListItems'>
                <div className='blogsListItem'>
                    <a className='blogsListItemHeader'>{t("blogListItemHeader")}Lorem ipsum </a>
                    <a className='blogsListItemSpan'>{t("blogListItemSpan1")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                    <button className='blogsListItemButton'><a>{t("readMore")}</a></button>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsListItemHeader'>{t("blogListItemHeader")}Lorem ipsum </a>
                    <a className='blogsListItemSpan'>{t("blogListItemSpan2")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                    <button className='blogsListItemButton'><a>{t("readMore")}</a></button>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsListItemHeader'>{t("blogListItemHeader")}Lorem ipsum </a>
                    <a className='blogsListItemSpan'>{t("blogListItemSpan3")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                    <button className='blogsListItemButton'><a>{t("readMore")}</a></button>
                </div>
            </div>
        </div>
    );
}