import React, { useState } from 'react';

function Cityfun(props) {

    const[CityName, setCityName] = useState('India...');

    const ChangeCity = () => {
        setCityName('US...');
    }


    return (
        <div>
                <p>{CityName}</p>
                <button onClick={() => ChangeCity()}>ChangeCity</button>
        </div>
    );
}

export default Cityfun;