import './App.css';
import MainPageSlider from './components/MainPagSlider/MainPageSlider';
import MainPageSliderItem from './components/MainPagSlider/MainPageSliderItem';
import { WheelAnimationComponent, WheelAnimationComponentItem } from './components/WheelAnimation/WheelAnimationComponent';

function App() {
  return (
    <div className="App">
      <MainPageSlider>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/home.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/metaverse.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/cloth_selected.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/watch.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/shoe.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/joint.svg'}></MainPageSliderItem>
      </MainPageSlider>

    </div>
  );
}

export default App;
