import React from 'react';
import Selection from './Selection';
import TriangleSVG from './svgs/TriangleSVG';

export default function PlayerChoosing({ setPlayerSelection, setPlayerChoosing, setRandomComputerSelection }) {
    function handleSelectOption(option) {
        setPlayerSelection(option);
        setPlayerChoosing(false);
        setRandomComputerSelection();
    }

    return (
        <div className='player-choosing-container container'>
            <div className='selections-grid'>
                <Selection selection="rock" onClick={handleSelectOption}/>
                <Selection selection="paper" onClick={handleSelectOption}/>
                <Selection selection="scissors" onClick={handleSelectOption}/>

                <div className="triangle">
                    <TriangleSVG/>
                </div>
            </div>
        </div>
    );
}