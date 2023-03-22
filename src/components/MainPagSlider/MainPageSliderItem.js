import './MainPageSlider.css'


const MainPageSliderItem = (props) => {

    return (<div className='mainPageSliderItem'>
        <img src={props.src} style={{
            position: 'absolute',
            top: 'calc(50%)',
            transform: 'translate(-50%, -50%)',
            left: 'calc(-50%)',
        }}></img>
    </div>);
}


export default MainPageSliderItem;