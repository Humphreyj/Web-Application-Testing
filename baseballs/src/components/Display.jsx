import React from 'react';
import styled from 'styled-components';

const Display = (props) => {

    const Scoreboard =  styled.div`
        display: flex;
        justify-content: space-evenly;
        padding: 3%;
    `

    const Balls = styled.div`
    border: 1px solid black;
    padding: 3%;
    
    `
    const Strikes = styled.div`
    border: 1px solid black;
    padding: 3%;
    `
    
    return (
        <div>
            <Scoreboard>
                <Balls><p>Ball: {props.data.ball}</p></Balls>
                <Strikes><p>Strikes: {props.data.strike}</p></Strikes>
            </Scoreboard>

            
        </div>
    );
}

export default Display;
