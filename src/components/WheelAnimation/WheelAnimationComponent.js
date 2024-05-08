import * as React from 'react';
import './WheelAnimationComponent.css';

export const WheelAnimationComponent = React.forwardRef((props, refs) => {
	return (
		<div className="wheelAnimationItemsContainer" style={props.style}>
			{
				React.Children.map(props.children,
					(e, k) => {
						return (
							<div className={'wheelAnimationItem'} style={{ zIndex: k }} key={k}>
								<div className='wheelAnimationItemInner'>
									{React.cloneElement(e,
										{
											status: k === props.index ? 'start' : k === props.prevIndex ? 'stop' : ''
										})
									}
								</div>
							</div>
						)
					})
			}
		</div>);
})

export const WheelAnimationComponentItem = React.forwardRef((props, refs) => {
	return (<div className="wheelAnimationItems" style={props.style} name={props.name}>
		{React.Children.map(props.children,
			(e, k) => {
				return (
					<div className={'wheelAnimationItem'} style={{ zIndex: k }} key={k}>
						<div className='wheelAnimationItemInner'>
							{React.cloneElement(e,
								{
									className: 'animation' + e.props.name + ' ' +
										(props.status === 'start' ? 'animationStart' + e.props.name : ' ') +
										(props.status === 'stop' ? 'animationStop' + e.props.name : ' ')
								})
							}</div>
					</div>
				)
			})
		}
	</div>);
});

// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current = value; //assign the value of ref to the argument
//     }, [value]); //this code will run when the value of 'value' changes
//     return ref.current; //in the end, return the current ref value.
// }