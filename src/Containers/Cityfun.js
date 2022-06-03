import React, { useState } from 'react';

function Cityfun({id, Country_name}) {

    const[CityName, setCityName] = useState('Surat...');

    const ChangeCity = () => {
        setCityName('Mumbai...');
    }


    return (
        <div>
                <p>{CityName}</p>
                <button onClick={() => ChangeCity()}>ChangeCity</button>
                <p>{id} {Country_name}</p>
        </div>
    );
}

export default Cityfun;