import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Route, Routes} from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { AboutUs } from './pages/aboutUs/AboutUs';
import { ProductAr } from './pages/products/ProductAr';
import { ProductMeta } from './pages/products/ProductMeta';
import { ProductJoint } from './pages/products/ProductJoint';
import { ProductWatch } from './pages/products/ProductWatch';
import { ProductShoes } from './pages/products/ProductShoes';
import { ProductClooth } from './pages/products/ProductClooth';
import { Blog } from './pages/blogs/Blog';
import { Blogs } from './pages/blogs/Blogs';
import { ContactUs } from './pages/contactUs/ContactUs';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { ContactCv } from './components/ContactCv/ContactCv';

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "tr",
    resources: {
      en: {
        translation: require("../src/locales/en.json")
      },
      tr: {
        translation: require("../src/locales/tr.json")
      },
      fr: {
        translation: require("../src/locales/fr.json")
      },
      de: {
        translation: require("../src/locales/de.json")
      },
      it: {
        translation: require("../src/locales/it.json")
      },
      ar: {
        translation: require("../src/locales/ar.json")
      }
    }
  });

function App() {
  return (
        <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/productAr' element={<ProductAr></ProductAr>}></Route>
          <Route path='/productMeta' element={<ProductMeta></ProductMeta>}></Route>
          <Route path='/productJoint' element={<ProductJoint></ProductJoint>}></Route>
          <Route path='/productWatch' element={<ProductWatch></ProductWatch>}></Route>
          <Route path='/productShoes' element={<ProductShoes></ProductShoes>}></Route>
          <Route path='/productClooth' element={<ProductClooth></ProductClooth>}></Route>
          <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route>
          <Route path='/sugarBlog' element={<Blog></Blog>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
          <Route path='/contactCv' element={<ContactCv></ContactCv>}></Route>
        </Routes>
        <Contact></Contact>
        <Footer></Footer>
        </div>
         
 
   
  );
}

export default App;
