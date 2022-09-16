import React from 'react';
import RockSVG from "./svgs/RockSVG";
import PaperSVG from "./svgs/PaperSVG";
import ScissorsSVG from "./svgs/ScissorsSVG";

export default function Selection({ selection, onClick, winner }) {
    const rock = selection === "rock";
    const paper = selection === "paper";
    const scissors = selection === "scissors";

    return (
        <div 
            className={`${selection ? selection : "empty-selection"} ${winner ? "winner" : ""} selection`}
            onClick={() => {
                if (!onClick) return;
                onClick(selection);
            }}
        >
            { rock ? <RockSVG/> : <></> }
            { paper ? <PaperSVG/> : <></> }
            { scissors ? <ScissorsSVG/> : <></> }
        </div>
    )
}