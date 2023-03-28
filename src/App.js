import './App.css';
import { MainPageSlider, MainPageSliderItem } from './components/MainPagSlider/MainPageSlider';
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
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/home.svg'} ssrc={process.env.PUBLIC_URL + '/home_selected.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/metaverse.svg'} ssrc={process.env.PUBLIC_URL + '/metaverse_selected.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/cloth.svg'} ssrc={process.env.PUBLIC_URL + '/cloth_selected.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/watch.svg'} ssrc={process.env.PUBLIC_URL + '/watch_selected.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/shoe.svg'} ssrc={process.env.PUBLIC_URL + '/shoe_selected.svg'}></MainPageSliderItem>
        <MainPageSliderItem src={process.env.PUBLIC_URL + '/joint.svg'} ssrc={process.env.PUBLIC_URL + '/joint_selected.svg'}></MainPageSliderItem>
      </MainPageSlider>

      <Customers></Customers>

      <Statistics></Statistics>

      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
