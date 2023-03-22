import './App.css';
import MainPageSlider from './components/MainPagSlider/MainPageSlider';
import MainPageSliderItem from './components/MainPagSlider/MainPageSliderItem';
import { WheelAnimationComponent, WheelAnimationComponentItem } from './components/WheelAnimation/WheelAnimationComponent';
import { Customers } from './components/Customers/Customers';
import { Header } from './components/Header/Header';
import { Statistics } from './components/Statistics/Statistics';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainPageSlider>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/home.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/metaverse.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/cloth_selected.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/watch.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/shoe.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/joint.svg'}></MainPageSliderItem>
      </MainPageSlider>


      <Customers></Customers>
      <Statistics></Statistics>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
