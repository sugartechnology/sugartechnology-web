import { useEffect } from 'react';
import './ArDetails.css';
import { useTranslation} from "react-i18next";

export const TableDetails = props =>{
    const {t} = useTranslation();
    useEffect(()=>{
        const existingScript = document.getElementById('sugar-model-viwer-js');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = '/assets/js/sugar-model-viewer.js';
            script.id = 'sugar-model-viwer-js';
            script.type = 'module';
            document.body.appendChild(script);   
        }
    },[])
    return(
        <div className='arDetailsContainer'>
            <div className='arDetailsSpans'>
                <a className='arDetailsHeader'>{t("ArDetailsTable")}</a>
                <a className='arDetailsSpan'>{t("arDetailsSpanTable")}</a>
                <div className='arDetailsModelViewer'>
                    <sugar-model-viewer class="modelViewer" id="sugar" style={{ width:"100%" ,height: "100%", background: "white",margin: "auto" ,display: "block" ,marginBottom: "60px" ,paddingBottom: "60px"}} ar="" shadow-intensity="1" show-model-group
                        ar-scale="fixed" show-option="" camera-controls="" ar-status="not-presenting" camera-down-lock="true"  camera-orbit="15deg 55deg auto" template="advanced" showDimension="true"
                        product_id="SIMURG49575" company_id="21" exposure="1"  joint-show="" selectColor="#ED401A" qr="">
                    </sugar-model-viewer>
                    <img className='modelViewerShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{opacity: "0.5", position: "absolute", width: "65%", zIndex: "-1"}}></img>
                </div>
            </div>
            <img className='arDetailsBubble' alt='' src={'./assets/img/ArDetailsImg2.webp'} style={{position: "absolute", bottom: "0px", left: "0px", zIndex: "-1"}}></img>
        </div>
    );
}