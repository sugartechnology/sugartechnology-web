import { About } from "../../components/About/About";
import { CustomerComments } from "../../components/CustomerComments/CustomerComments";
import { Customers } from "../../components/Customers/Customers";
import { MainPageSlider, MainPageSliderItem } from "../../components/MainPagSlider/MainPageSlider";
import { Statistics } from "../../components/Statistics/Statistics";


export const MainPage = ()=>{

    return (<div className="MainPage">
         <MainPageSlider>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/home.svg'} ssrc={process.env.PUBLIC_URL + '/home_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/metaverse.svg'} ssrc={process.env.PUBLIC_URL + '/metaverse_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/cloth.svg'} ssrc={process.env.PUBLIC_URL + '/cloth_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/watch.svg'} ssrc={process.env.PUBLIC_URL + '/watch_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/shoe.svg'} ssrc={process.env.PUBLIC_URL + '/shoe_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/joint.svg'} ssrc={process.env.PUBLIC_URL + '/joint_selected.svg'}></MainPageSliderItem>
          </MainPageSlider>
          <About></About>
          <Customers></Customers>
          <Statistics></Statistics>
          <CustomerComments></CustomerComments>
    </div>);
}