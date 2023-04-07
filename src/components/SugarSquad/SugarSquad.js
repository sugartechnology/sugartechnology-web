import './SugarSquad.css';

export const SugarSquad = props =>{
    return(
        <div className='SugarSquadContainer'>
            <img className='sugarSquadButtonPrev' alt='' src={'./assets/img/SugarSquadButtonPrev.svg'} style={{width:"20px",position: "relative", left: "70px"}}></img>
            <div className='sugarSquads'>
                <div className='crew'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                    <div className='SugarSquadMemberResponsive' style={{display: "none"}}>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                </div>
                <div className='crew'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                    <div className='SugarSquadMemberResponsive' style={{display: "none"}}>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                </div>
                <div className='crew' id='crewResponsive'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>Project Management Head</a>
                    </div>
                    </div>
                </div>
            </div>
            <img className='sugarSquadButtonNext' alt='' src={'./assets/img/SugarSquadButtonNext.svg'} style={{width:"20px"}}></img>
        </div>
    );
}