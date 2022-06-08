import React, { useEffect, useState } from 'react';

function Timefun(props) {

        const[Time, setTime] = useState(new Date());

        const tick = () => {
            setTime(new Date());
        }

        useEffect( () => {

            // componentDidMount, componentDidupdate

            const TimeI = setInterval(() => tick(), 1000);
            
            // componentWillUnmount

            return () => {
                clearInterval(TimeI);
            }
         },[Time]);

    return (
        <div>
            <p>{Time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timefun;

