import React, {useState} from 'react';
import '../styles/Planet.css';

const Planet = ({astrObj, vis}) => {

    const {name} = astrObj;

    const [active, setActive] = useState(true);

    let LiPlanetMain = 'LiPlanetMain';
    let LiPlanetColor = active ? "LiPlanetColor1" : "LiPlanetColor2";

    const changeColor = () => {
        setActive(!active);
    }

    return ( 
        <>
            <li className={LiPlanetMain + ' ' + LiPlanetColor} onClick={() => { changeColor(); vis();}}>{name}</li>
        </>
     );
}
 
export default Planet;
