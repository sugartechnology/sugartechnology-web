
import { useState } from 'react';
import './WheelAnimationComponent.css'


export const WheelAnimationComponent = (props) => {


    return (<div className="wheelAnimationItemsContainer" style={props.style}>
        {props.children.map((m, k) => {
            return (m)
        })}
    </div>);
}


export const WheelAnimationComponentItem = (props) => {

    return (<div className="wheelAnimationItems" style={props.style}>
        {props.children.map(
            (e, k) => {
                return (
                    <div className={'wheelAnimationItem'} style={{ animation: 'rotate_open 1s linear', animationFillMode: 'forwards' }}>
                        <div className='wheelAnimationItemInner'>{e}</div>
                    </div>
                )
            }
        )}
    </div>);
}

