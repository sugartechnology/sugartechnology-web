
import { useEffect, useState, useRef } from 'react';
import * as React from 'react';
import './WheelAnimationComponent.css'


export const WheelAnimationComponent = (props) => {

    const [selected, setSelected] = useState(0);

    useEffect(() => {

    }, []);

    return (<div className="wheelAnimationItemsContainer" style={props.style}>
        {props.children.map((m, k) => {
            return (m)
        })}
    </div>);
}


export const WheelAnimationComponentItem = React.forwardRef((props, refs) => {


    const [selected, setSelected] = useState(false);
    const [deselected, setDeselected] = useState(false);
    const [children, setChildren] = useState(props.children);
    const [childrenRefs, setChildrenRefs] = useState([]);

    useEffect(() => {

        setChildrenRefs(props.children.map(child => {
            return React.createRef();
        }));
        console.log("childrend", refs);
        setChildren(props.children.map((child, i) => {
            return React.cloneElement(child, { name: "fatih", ref: childrenRefs[i] });
        }));


    }, []);

    return (<div className="wheelAnimationItems" style={props.style}>
        {children.map(
            (e, k) => {
                return (
                    <div className={'wheelAnimationItem'} style={{ zIndex: k }}>
                        <div className='wheelAnimationItemInner'>{e}</div>
                    </div>
                )
            }
        )}
    </div>);
});

