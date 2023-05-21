import './ShareBlog.css';
import { useTranslation} from "react-i18next";

export const ShareBlog = props =>{
    const {t} = useTranslation();
    return(
        <div className='shareBlogContainer'>
            <a className='shareBlogHeader'>{t("shareBlog")}</a>
            <a className='shareBlogSpan'>{t("shareBlogSpan")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
            <button className='shareBlogButton'><a>{t("readMore")}</a></button>
        </div>
    );
}