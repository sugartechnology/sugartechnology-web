import './BlogsMain.css';
import { useTranslation} from "react-i18next";

export const BlogsMain = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsMainContainer'>
            <div>
                <img className='blogsBackground' alt='' src={'./assets/img/blogsBackground.svg'}></img>
            </div>
            <div className='blogsImage'>
                <img className='blogsImg' alt='' src={'./assets/img/blogsImage.svg'}></img>
            </div>
            <div className='blogsSpans'>
                <a className='blogsHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                <a className='blogSpan'>Lorem ipsum dolor sit amet consectetur. Neque viverra mi at mattis nascetur eu quis risus netus.</a>
                <div className='blogsButtons'>
                    <button className='showAtHomeButton1'><a>{t("getStarted")}</a></button>
                    <button className='showAtHomeButton2'><a>{t("readMore")}</a></button>
                </div>
            </div>
        </div>
    );
}