import React,{ useEffect } from 'react';
import styled from 'styled-components';

const Dashboard = (props) => {

    const Controls =  styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 3em;
    `

    const ballHandler = () => {
        props.updateData({...props.data,ball: props.data.ball +1})

        if(props.data.ball >= 3) {
            props.updateData({...props.data,ball: props.data.ball = 0,
                ...props.data,strike: props.data.strike = 0,
                ...props.data,foul: props.data.foul = 0

            })
        }
        
      }

      const strikeHandler = () => {
        props.updateData({...props.data,strike: props.data.strike +1})
        if(props.data.strike >= 2) {
            props.updateData({...props.data,ball: props.data.ball = 0,
                ...props.data,strike: props.data.strike = 0,
                ...props.data,foul: props.data.foul = 0

            })

        }
        
      }
      const foulHandler = () => {
          if(props.data.strike < 2) {
            props.updateData({...props.data,foul: props.data.foul +1,
                ...props.data,strike: props.data.strike + 1})
          }else {
            props.updateData({...props.data,foul: props.data.foul +1})
          }
        
        
      }

      const hitHandler = () => {
        props.updateData({...props.data,hit: !props.data.hit,
            ...props.data,ball: props.data.ball = 0,
                ...props.data,strike: props.data.strike = 0,
                ...props.data,foul: props.data.foul = 0
         })
        
        
      }

    
    return (
        <Controls>
            <button onClick={ballHandler}>Ball</button>
            <button onClick={foulHandler}>Foul</button>
            <button onClick={strikeHandler}>Strike</button>
            <button onClick={hitHandler}>Hit!</button>
            
        </Controls>
    );
}

export default Dashboard;
