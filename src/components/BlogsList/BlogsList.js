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
                    <a className='blogsListItemHeader'>{t("blogListItemHeader")}</a>
                    <a className='blogsListItemSpan'>{t("blogListItemSpan1")}</a>
                    <button className='blogsListItemButton'><a>{t("readMore")}</a></button>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsListItemHeader'>{t("blogListItemHeader")}</a>
                    <a className='blogsListItemSpan'>{t("blogListItemSpan2")}</a>
                    <button className='blogsListItemButton'><a>{t("readMore")}</a></button>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsListItemHeader'>{t("blogListItemHeader")}</a>
                    <a className='blogsListItemSpan'>{t("blogListItemSpan3")}</a>
                    <button className='blogsListItemButton'><a>{t("readMore")}</a></button>
                </div>
            </div>
        </div>
    );
}