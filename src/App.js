import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { ProductAr } from "./pages/products/ProductAr";
import { ProductMeta } from "./pages/products/ProductMeta";
import { ProductJoint } from "./pages/products/ProductJoint";
import { ProductWatch } from "./pages/products/ProductWatch";
import { ProductShoes } from "./pages/products/ProductShoes";
import { ProductClooth } from "./pages/products/ProductClooth";
import { ProductCarpet } from "./pages/products/ProductCarpet";
import { ProductTable } from "./pages/products/ProductTable";
import { ProductBathroom } from "./pages/products/ProductBathroom";
import { ProductWhiteGoods } from "./pages/products/ProductWhiteGoods";
import { ProductDecoration } from "./pages/products/ProductDecoration";
import { ProductTextile } from "./pages/products/ProductTextile";
import { Blog1 } from "./pages/blogs/Blog1";
import { Blogs } from "./pages/blogs/Blogs";
import { ContactUs } from "./pages/contactUs/ContactUs";
import { ContactUsCv } from "./pages/contactUs/ContactUsCv";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { Blog2 } from "./pages/blogs/Blog2";
import { Blog3 } from "./pages/blogs/Blog3";
import { Blog4 } from "./pages/blogs/Blog4";

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "tr",
    resources: {
      en: {
        translation: require("../src/locales/en.json"),
      },
      tr: {
        translation: require("../src/locales/tr.json"),
      },
      fr: {
        translation: require("../src/locales/fr.json"),
      },
      de: {
        translation: require("../src/locales/de.json"),
      },
      it: {
        translation: require("../src/locales/it.json"),
      },
      ar: {
        translation: require("../src/locales/ar.json"),
      },
    },
  });

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/productAr" element={<ProductAr></ProductAr>}></Route>
        <Route
          path="/productMeta"
          element={<ProductMeta></ProductMeta>}
        ></Route>
        <Route
          path="/productJoint"
          element={<ProductJoint></ProductJoint>}
        ></Route>
        <Route
          path="/productWatch"
          element={<ProductWatch></ProductWatch>}
        ></Route>
        <Route
          path="/productShoes"
          element={<ProductShoes></ProductShoes>}
        ></Route>
        <Route
          path="/productClooth"
          element={<ProductClooth></ProductClooth>}
        ></Route>
        <Route
          path="/productCarpet"
          element={<ProductCarpet></ProductCarpet>}
        ></Route>
        <Route
          path="/productTable"
          element={<ProductTable></ProductTable>}
        ></Route>
        <Route
          path="/productBathroom"
          element={<ProductBathroom></ProductBathroom>}
        ></Route>
        <Route
          path="/productWhiteGoods"
          element={<ProductWhiteGoods></ProductWhiteGoods>}
        ></Route>
        <Route
          path="/productDecoration"
          element={<ProductDecoration></ProductDecoration>}
        ></Route>
        <Route
          path="/productTextile"
          element={<ProductTextile></ProductTextile>}
        ></Route>
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/sugarBlog1" element={<Blog1></Blog1>}></Route>
        <Route path="/sugarBlog2" element={<Blog2></Blog2>}></Route>
        <Route path="/sugarBlog3" element={<Blog3></Blog3>}></Route>
        <Route path="/sugarBlog4" element={<Blog4></Blog4>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/contactCv" element={<ContactUsCv></ContactUsCv>}></Route>
        <Route
          path="/c8ca4181f989193033fd5046a54f816d"
          element={<MainPage></MainPage>}
        ></Route>
      </Routes>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
