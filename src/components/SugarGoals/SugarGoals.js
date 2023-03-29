import './SugarGoals.css';

export const SugarGoals = props =>{
    return(
        <div className='SugarGoalsContainer'>
            <div className='sugarGoalHeader'>
                <a>ne başardık ve Gelecek planlarımız</a>
            </div>
            <div className='sugarGoals'>
                <img alt='' src={'./assets/img/goals1.svg'}></img>
                <img alt='' src={'./assets/img/goals2.svg'}></img>
                <img alt='' src={'./assets/img/goals3.svg'}></img>
            </div>
            <div className='sugarGoalsShadow'>
                <img></img>
            </div>
        </div>
    );
}