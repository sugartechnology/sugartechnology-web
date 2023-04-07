import { SectoralSolution } from '../../components/SectoralSolution/SectoralSolution';
import { SugarGoals } from '../../components/SugarGoals/SugarGoals';
import { SugarSquad } from '../../components/SugarSquad/SugarSquad';
import { SugarTeam } from '../../components/SugarTeam/SugarTeam';
import { WhatsNew } from '../../components/WhatsNew/WhatsNew';
import { WhoSugar } from '../../components/WhoSugar/WhoSugar';
import './AboutUs.css';

export const AboutUs = props =>{
    return(
        <div className='AboutUs'>
            <WhoSugar></WhoSugar>
            <SugarTeam></SugarTeam>
            <SugarSquad></SugarSquad>
            <SugarGoals></SugarGoals>
            <WhatsNew></WhatsNew>
            <SectoralSolution></SectoralSolution>
        </div>
    );
}