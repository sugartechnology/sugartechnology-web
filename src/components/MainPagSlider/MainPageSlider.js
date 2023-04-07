import './MainPageSlider.css'
import SmallSliderMenu from './SmallSliderMenu.svg'
import { useTranslation} from "react-i18next";
import { WheelAnimationComponent, WheelAnimationComponentItem } from '../WheelAnimation/WheelAnimationComponent';
import { useState, useEffect, useRef } from 'react';
import * as React from 'react';

export const MainPageSlider = (props) => {

    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [timeOutId, setTimeOutId] = useState(0);
    const indexRef = useRef(index);
    const {t} = useTranslation();
    
    useEffect(() => {
        indexRef.current = index;
        clearTimeout(timeOutId);
        setTimeOutId(setTimeout(() => {
            setIndex((indexRef.current + 1) % props.children.length);
            setPrevIndex(indexRef.current);
        }, 5000));
        console.log("index", index);
    }, [index]);

    return (<div className='mainPageSliderContainer'>
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
            {React.Children.map(props.children,
                (e, k) => {
                    return React.cloneElement(e,
                        {
                            click: () => {
                                setIndex(k);
                                setPrevIndex(index);
                            },
                            selected: k == index
                        })
                })}
        </div>

        <div className="slideDetail" style={{ filter: '8px' }} key={1}>
            <div className='slideDetailElements'>
                <a className='slideDetailFirstSpan'>{t("slideDetailHeader")}</a>
                <a className='slideDetailSecondSpan'>{t("slideDetailSpan")}</a>
                <button className='slideDetailButton'>
                    <a>{t("readMore")}</a>
                </button>
            </div>
        </div>

        <WheelAnimationComponent style={{ width: "500px", height: "500px" }} index={index} prevIndex={prevIndex}>

            <WheelAnimationComponentItem key={1}>
                <div name="Floor"></div>
                <div name="Carpet" ></div>
                <div name="Window" ></div>
                <div name="Sofa"></div>
                <div name="Flower" ></div>
                <div name="Drawer"></div>
                <div name="Iphone" ></div>
            </WheelAnimationComponentItem>
            <WheelAnimationComponentItem key={2}>
                {/* Metaverse */}
                <div name='Man' ></div>
                <div name='Joy2' ></div>
                <div name='Joy'></div>
            </WheelAnimationComponentItem>
            {/* Cloth */}
            <WheelAnimationComponentItem key={3}>
                <div name='Woman'></div>
                <div name='Iphone2'></div>
                <div name='Dress' ></div>
            </WheelAnimationComponentItem>
            {/* Watch */}
            <WheelAnimationComponentItem key={4}>
                <div name='Arm'></div>
                <div name='Iphone2'></div>
                <div name='Watch'></div>
            </WheelAnimationComponentItem>
            {/* Foot */}
            <WheelAnimationComponentItem key={5}>
                <div name='Foot'></div>
                <div name='Iphone2'></div>
                <div name='Sneaker'></div>
            </WheelAnimationComponentItem>
            {/* Attach */}
            <WheelAnimationComponentItem key={6}>
                <div name='Corner'></div>
                <div name='LeftSofa'></div>
                <div name='Joint'></div>
            </WheelAnimationComponentItem>

        </WheelAnimationComponent>
    </div >);
}


export const MainPageSliderItem = (props) => {


    return (<div className='mainPageSliderItem' onClick={props.click}>
        <img src={props.selected ? props.ssrc : props.src} style={{
            position: 'absolute',
            top: 'calc(50%)',
            transform: 'translate(-50%, -50%)',
            left: 'calc(-50%)',
        }}></img>
    </div>);
}


