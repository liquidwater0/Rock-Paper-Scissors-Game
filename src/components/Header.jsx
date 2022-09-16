import React from 'react';
import LogoSVG from "./svgs/LogoSVG";

export default function Header({ score }) {
    return (
        <header className='header container'>
            <LogoSVG/>
            <div className="score-container">
                <div className="score-text">Score</div>
                <div className="score">{ score }</div>
            </div>
        </header>
    );
}