import './BlogsMain.css';
import { useTranslation} from "react-i18next";

export const BlogsMain = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsMainContainer'>
            <div className='squares'>
                <div className='square' style={{width: "346px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "305px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "429px", height: "479px", position: "relative", left: "40px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg3.svg'}></img>
                </div>
            </div>
            <div className='squares' style={{position: "relative", left: "40px"}}>
                <div className='square' style={{width: "429px", height: "479px", position: "relative", right: "40px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg3.svg'}></img>
                </div>
                <div className='square' style={{width: "305px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "346px", height: "479px", position: "relative", left: "40px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
            </div>
            <div className='squares'>
                <div className='square' style={{width: "346px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "305px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "429px", height: "479px", position: "relative", left: "40px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg3.svg'}></img>
                </div>
            </div>
            <div className='squares' style={{position: "relative", left: "40px"}}>
                <div className='square' style={{width: "429px", height: "479px", position: "relative", right: "40px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg3.svg'}></img>
                </div>
                <div className='square' style={{width: "305px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "346px", height: "479px", position: "relative", left: "40px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
            </div>
            <div className='squares'>
                <div className='square' style={{width: "346px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "305px", height: "479px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg1.svg'}></img>
                </div>
                <div className='square' style={{width: "429px", height: "479px", position: "relative", left: "40px"}}>
                    <button className='squareButton'><a>{t("readMore")}</a></button>
                    <a className='squareHeader'>Lorem ipsum dolor sit amet consectetur.</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Sugar Team</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/squareImg3.svg'}></img>
                </div>
            </div>
        </div>
    );
}