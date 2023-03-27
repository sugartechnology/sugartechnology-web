import './MainPageSlider.css'
import SmallSliderMenu from './SmallSliderMenu.svg'
import { WheelAnimationComponent, WheelAnimationComponentItem } from '../WheelAnimation/WheelAnimationComponent';
import { useState } from 'react';

export const MainPageSlider = (props) => {


    const [selectedIndex, setSelectedIndex] = useState(0);

    return (<div class='mainPageSliderContainer'>
        <div className='mainPageTopLeftFigure rotate'></div>
        <div className='mainPageTopRightFigure rotate'></div>
        <div className='mainPageMiddleFigure rotate'></div>
        <div className='mainPageSmallFigure bright' style={{
            width: '243px',
            height: '233px',
            left: '498px',
            top: '136px'
        }}></div>
        <div className='mainPageSmallFigure '></div>
        <div className='mainPageSmallFigure ' style={{
            width: '629px',
            height: '665px',
            left: '1170px',
            top: '316px'
        }}></div>
        <div className='mainPageSmallFigure0 '></div>
        <div className="smallSliderMenu" >
            <img src={SmallSliderMenu} style={{ position: 'absolute' }}></img>
            {props.children}
        </div>

        <div className="slideDetail" style={{ filter: '8px' }}></div>
        <WheelAnimationComponent style={{ width: "500px", height: "500px" }} >

            <WheelAnimationComponentItem >


                {/* <div className='animationFloor animationStartFloor' ></div>
                <div className='animationCarpet animationStartCarpet' ></div>
                <div className='animationWindow animationStartWindow' ></div>
                <div className='animationSofa animationStartSofa' ></div>
                <div className='animationFlower animationStartFlower' ></div>
                <div className='animationDrawer animationStartDrawer' ></div>
                <div className='animationIphone animationStartIphone' ></div> */}


                                    {/* Metaverse */}

                {/* <div className='animationMan animationStartMan' ></div> 
                <div className='animationJoy2 animationStartJoy2' ></div> 
                <div className='animationJoy animationStartJoy' ></div>  */}

                
                                {/* Cloth */}
                                

              {/* <div className='animationWoman animationStartWoman' ></div> 
              <div className='animationIphone2 animationStartIphone2' ></div>
              <div className='animationDress animationStartDress' ></div> */}

                                {/* Watch */}
            {/* <div className='animationArm animationStartArm' ></div>
            <div className='animationIphone2 animationStartIphone2' ></div>
            <div className='animationWatch animationStartWatch' ></div> */}
                               {/* Foot */}

            {/* <div className='animationFoot animationStartFoot' ></div>
            <div className='animationIphone2 animationStartIphone2' ></div>
            <div className='animationSneaker animationStartSneaker' ></div> */}


                               {/* Attach */}
            <div className='animationCorner animationStartCorner' ></div>
            <div className='animationLeftSofa animationStartLeftSofa' ></div>
            <div className='animationJoint animationStartJoint' ></div>




            </WheelAnimationComponentItem>

            <WheelAnimationComponentItem style={{ display: "none" }}>
                <div className='wheelAnimationFoot'></div>
                <div className='wheelAnimationCamera'></div>
                <div className='wheelAnimationShoe'></div>
            </WheelAnimationComponentItem>

        </WheelAnimationComponent>
    </div>);
}


export const MainPageSliderItem = (props) => {

    return (<div className='mainPageSliderItem'>
        <img src={props.src} style={{
            position: 'absolute',
            top: 'calc(50%)',
            transform: 'translate(-50%, -50%)',
            left: 'calc(-50%)',
        }}></img>
    </div>);
}


