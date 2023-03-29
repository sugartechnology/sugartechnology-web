import { Header } from '../../components/Header/Header';
import { WhoSugar } from './components/WhoSugar/WhoSugar';
import { SugarTeam } from './components/SugarTeam/SugarTeam';
import { SugarSquad } from './components/SugarSquad/SugarSquad';
import { WhatsNew } from '../../components/WhatsNew/WhatsNew';
import { SectoralSolution } from './components/SectoralSolution/SectoralSolution';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './AboutUs.css';

export const AboutUs = props =>{
    return(
        <div className='AboutUs'>
            <Header></Header>
            <WhoSugar></WhoSugar>
            <SugarTeam></SugarTeam>
            <SugarSquad></SugarSquad>
            <WhatsNew></WhatsNew>
            <SectoralSolution></SectoralSolution>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}