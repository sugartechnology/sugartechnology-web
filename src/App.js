import i18n from "i18next";
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Api } from "./api/Api";
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AboutUs } from './pages/aboutUs/AboutUs';
import { BlogContainerPage } from "./pages/blogs/BlogContainerPage";
import { BlogsPage } from "./pages/blogs/BlogsPage";
import { ContactUs } from './pages/contactUs/ContactUs';
import { ContactUsCv } from './pages/contactUs/ContactUsCv';
import { MainPage } from './pages/main/MainPage';
import { ProductAr } from './pages/products/ProductAr';
import { ProductBathroom } from './pages/products/ProductBathroom';
import { ProductCarpet } from './pages/products/ProductCarpet';
import { ProductClooth } from './pages/products/ProductClooth';
import { ProductDecoration } from './pages/products/ProductDecoration';
import { ProductJoint } from './pages/products/ProductJoint';
import { ProductMeta } from './pages/products/ProductMeta';
import { ProductShoes } from './pages/products/ProductShoes';
import { ProductTable } from './pages/products/ProductTable';
import { ProductTextile } from './pages/products/ProductTextile';
import { ProductWatch } from './pages/products/ProductWatch';
import { ProductWhiteGoods } from './pages/products/ProductWhiteGoods';

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "tr",
    resources: {
      en: {translation: require("../src/locales/en.json"),},
      tr: {translation: require("../src/locales/tr.json"),},
      fr: {translation: require("../src/locales/fr.json"),},
      de: {translation: require("../src/locales/de.json"),},
      it: {translation: require("../src/locales/it.json"),},
      ar: {translation: require("../src/locales/ar.json"),},
    },
  });

const api = new Api();

function App() {
  const [blogThumbs, setPageThumbs] = useState([]);
  const [blogUrls, setPageUrls] = useState([]);
 

  useEffect(() => {
	const pages = api.fetchPages;
	if (pages === undefined || pages.length < 1) return;
	const urls = pages.map(p => {
	  return {
		ar: p.urlAr,
		de: p.urlDe,
		en: p.urlEn,
		es: p.urlEs,
		fr: p.urlFr,
		it: p.urlIt,
		tr: p.urlTr
	  };
	});
	const thumbs = pages.map(page => page.thumb);

	setPageUrls(urls);
	setPageThumbs(thumbs);
  }, []);

  return (
        <div>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/productAr' element={<ProductAr></ProductAr>}></Route>
            <Route path='/productMeta' element={<ProductMeta></ProductMeta>}></Route>
            <Route path='/productJoint' element={<ProductJoint></ProductJoint>}></Route>
            <Route path='/productWatch' element={<ProductWatch></ProductWatch>}></Route>
            <Route path='/productShoes' element={<ProductShoes></ProductShoes>}></Route>
            <Route path='/productClooth' element={<ProductClooth></ProductClooth>}></Route>
            <Route path='/productCarpet' element={<ProductCarpet></ProductCarpet>}></Route>
            <Route path='/productTable' element={<ProductTable></ProductTable>}></Route>
            <Route path='/productBathroom' element={<ProductBathroom></ProductBathroom>}></Route>
            <Route path='/productWhiteGoods' element={<ProductWhiteGoods></ProductWhiteGoods>}></Route>
            <Route path='/productDecoration' element={<ProductDecoration></ProductDecoration>}></Route>
            <Route path='/productTextile' element={<ProductTextile></ProductTextile>}></Route>
            <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route>
			<Route path="/blogs" element={<BlogsPage thumbs={blogThumbs} urls={blogUrls} />} />
				{blogUrls && blogUrls.length > 0 && blogUrls.map((urls, index) => (
					blogThumbs[index] &&
					<Route key={index}
						path={`/blog${index}`}
						element={<BlogContainerPage urls={urls} />} />
				)
				)}
            <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
            <Route path='/contactCv' element={<ContactUsCv></ContactUsCv>}></Route>
          </Routes>
          <Contact></Contact>
          <Footer></Footer>
        </div>
  );
}

export default App;
