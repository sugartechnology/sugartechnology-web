import './App.css';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Route, Routes, Switch } from 'react-router-dom';

import { MainPage } from './pages/main/MainPage';
import { AboutUs } from './pages/aboutUs/AboutUs'
import { Products } from './pages/products/Products';
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
        <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route>
        </Routes>
        <Contact></Contact>
        <Footer></Footer>
        </div>
         
 
   
  );
}

export default App;
