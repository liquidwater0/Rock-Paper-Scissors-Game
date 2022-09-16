import React from 'react';
import Selection from './Selection';
import WinLose from './WinLose';

export default function ComputerChoosing({ playerSelection, computerSelection, winner, restart }) {
    return (
        <div className='computer-choosing-container container'>
            <div className="picked-container">
                <div className='picked-text'>You Picked</div>
                <Selection selection={playerSelection} winner={(winner !== "draw" && winner ? true : false)}/>
            </div>

            {
                winner !== undefined ?
                <WinLose winner={winner} restart={restart}/> : <></>
            }

            <div className="picked-container">
                <div className='picked-text'>The House Picked</div>
                <Selection selection={computerSelection} winner={(winner !== "draw" && winner === false ? true : false)}/>
            </div>
        </div>
    );
}