import './Statistics.css'

export const Statistics = props =>{
    return(
        <div className='statisticsContainer'>
            <div className='leftStatictics'>
                <a className='firstSpan'>90</a>
                <a className='secondSpan'>Firma Müşteri</a>
                <a className='thirdSpan'>Lorem ipsum dolor sit amet consectetur.</a>
            </div>
            <div className='rightStatictics'>
                <a className='firstSpan'>100,400+</a>
                <a className='secondSpan'>Proje</a>
                <a className='thirdSpan'>Lorem ipsum dolor sit amet consectetur.</a>
            </div>
        </div>
    );
}