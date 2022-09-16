import React from 'react';

export default function Footer({ openRules }) {
    return (
        <footer className='footer'>
            <button 
                className="rules-button" 
                onClick={openRules}
            >
                Rules
            </button>
        </footer>
    );
}