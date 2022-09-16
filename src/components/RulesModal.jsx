import React from 'react';
import CloseSVG from './svgs/CloseSVG';
import RulesSVG from './svgs/RulesSVG';

export default function RulesModal({ rulesModelOpen, closeRules }) {
    return (
        <div className={(rulesModelOpen ? "open" : "closed") + ' modal-container'}>
            <div className="modal">
                <div className="modal-header">
                    <span className='modal-title'>Rules</span>
                    <button 
                        className="modal-close-button"
                        aria-label='close button'
                        onClick={closeRules}
                    >
                        <CloseSVG/>
                    </button>
                </div>
                <div className="modal-body">
                    <RulesSVG/>
                </div>
            </div>
        </div>
    ); 
}