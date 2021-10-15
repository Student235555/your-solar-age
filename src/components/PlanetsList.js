import React from 'react';
import '../styles/PlanetsList.css';
import Planet from './Planet';

const PlanetsList = () => {
    return ( 
        <>
            <h2>Planets list:</h2>
            <ul className='UlPlanetsList'>
                <Planet/>
            </ul>
        </>
     );
}
 
export default PlanetsList;
