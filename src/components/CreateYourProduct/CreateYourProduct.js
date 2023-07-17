import { useEffect } from 'react';
import './CreateYourProduct.css';


export const CreateYourProduct = props =>{
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
        <div className='createYourProductContainer'>
            <img className='corner1' alt='' src={'./assets/img/corner1.svg'}></img>
            <img className='corner2' alt='' src={'./assets/img/corner2.svg'}></img>
            <img className='corner3' alt='' src={'./assets/img/corner3.svg'}></img>
            <img className='corner4' alt='' src={'./assets/img/corner4.svg'}></img>
            <div className='sugarModelViewer'>
                <sugar-model-viewer product-id="1104_7053" company-id="27" shadow-intensity=" 2" camera-controls
                    style={{width: "100%",height: "50vh"}} interaction-prompt="none" feature-on="hidden" joint-show>
                </sugar-model-viewer>
            </div>
            
        </div>
    );
}