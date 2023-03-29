import './App.css';
import MainPageSlider from './components/MainPagSlider/MainPageSlider';
import MainPageSliderItem from './components/MainPagSlider/MainPageSliderItem';
import { WheelAnimationComponent, WheelAnimationComponentItem } from './components/WheelAnimation/WheelAnimationComponent';
import { Customers } from './components/Customers/Customers';
import { Header } from './components/Header/Header';
import { Statistics } from './components/Statistics/Statistics';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import { CustomerComments } from './components/CustomerComments/CustomerComments';
import { About } from './components/About/About';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ArDetails } from './components/ArDetails/ArDetails';
import { Route, BrowserRouter } from 'react-router-dom';

i18n
  .use(initReactI18next)
  .init({
    lng: "tr", // varsayılan dil
    fallbackLng: "en", // yedek dil
    resources: {
      en: {
        translation: require("../src/locales/en.json")
      },
      tr: {
        translation: require("../src/locales/tr.json")
      }
    }
  });


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

<BrowserRouter>
  <Route path='/aboutUs'>
    <About></About>
  </Route>
</BrowserRouter>
      
      <Customers></Customers>
      <Statistics></Statistics>
      <CustomerComments></CustomerComments>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
