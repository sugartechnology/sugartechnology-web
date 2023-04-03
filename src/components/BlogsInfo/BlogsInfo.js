import './BlogsInfo.css';
import { useTranslation} from "react-i18next";

export const BlogsInfo = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsInfoContainer'>
            <div className='blogsInfoHeaders'>
                <a className='blogsInfoHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                <a className='blogsInfoSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                <button className='blogsInfoButton'><a>{t("readMore")}</a></button>
            </div>
            <div className='blogsInfoImages'>
                <img className='blogsInfoImage' alt='' src={'./assets/img/blogsInfoImage.svg'}></img>
            </div>
            <div className='blogsInfoItems'>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>Lorem ipsum </a>
                    <a className='blogsInfoItemSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>Lorem ipsum </a>
                    <a className='blogsInfoItemSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                </div>
                <div className='blogsListItem'>
                    <a className='blogsInfoItemHeader'>Lorem ipsum </a>
                    <a className='blogsInfoItemSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
                </div>
            </div>
        </div>
    );
}