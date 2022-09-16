import React from 'react';

export default function WinLose({ winner, restart }) {
    return (
        <div className="win-lose-container">
            <div className="win-lose-text">
                { 
                    winner === true ? "You Win" : 
                    winner === false ? "You Lose" : 
                    winner === "draw" ? "Draw!" : "" 
                }
            </div>
            <button 
                className='play-again-button'
                onClick={restart}
            >
                Play Again
            </button>
        </div>
    );
}