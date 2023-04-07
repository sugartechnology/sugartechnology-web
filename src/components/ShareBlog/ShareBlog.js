import './ShareBlog.css';
import { useTranslation} from "react-i18next";

export const ShareBlog = props =>{
    const {t} = useTranslation();
    return(
        <div className='shareBlogContainer'>
            <a className='shareBlogHeader'>{t("shareBlog")}</a>
            <a className='shareBlogSpan'>{t("shareBlogSpan")}</a>
            <button className='shareBlogButton'><a>{t("readMore")}</a></button>
        </div>
    );
}