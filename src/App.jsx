import React, { useState, useEffect } from 'react';
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from './components/Header';
import PlayerChoosing from './components/PlayerChoosing';
import ComputerChoosing from './components/ComputerChoosing';
import Footer from './components/Footer';
import RulesModal from './components/RulesModal';
import Attribution from './components/Attribution';

const COMPUTER_PICK_DELAY = 3000;
const SELECTIONS = [
    {
        name: "rock",
        beats: "scissors"
    }, {
        name: "paper",
        beats: "rock"
    }, {
        name: "scissors",
        beats: "paper"
    }
];

export default function App() {
    const [score, setScore] = useLocalStorage("rock-paper-scissors-score", 0);
    const [playerChoosing, setPlayerChoosing] = useState(true);
    const [playerSelection, setPlayerSelection] = useState(undefined);
    const [computerSelection, setComputerSelection] = useState(undefined);
    const [winner, setWinner] = useState(undefined);
    const [rulesModelOpen, setRulesModalOpen] = useState(false);

    useEffect(handleWinLose, [computerSelection]);

    function handleWinLose() {
        const playerSelected = SELECTIONS.find(selection => selection.name === playerSelection);
        const computerSelected = SELECTIONS.find(selection => selection.name === computerSelection);
        
        if (!playerSelected || !computerSelected) return;

        if (playerSelected.name === computerSelected.beats) {
            setWinner(false);
        } else if (computerSelected.name === playerSelected.beats) {
            setWinner(true);
            setScore(prev => Number(prev) + 1);
        } else if (playerSelected.name === computerSelected.name) {
            setWinner("draw");
        }
    }

    function setRandomComputerSelection() {
        setTimeout(() => {
            const randomSelection = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)].name;
            setComputerSelection(randomSelection);
        }, COMPUTER_PICK_DELAY);
    }

    function restart() {
        setPlayerChoosing(true);
        setPlayerSelection(undefined);
        setComputerSelection(undefined);
        setWinner(undefined)
    }

    function openRules() {
        setRulesModalOpen(true);
    }

    function closeRules() {
        setRulesModalOpen(false);
    }

    return (
        <main className='main'>
            <Header score={score}/>

            { 
                playerChoosing ? 
                <PlayerChoosing 
                    setPlayerSelection={setPlayerSelection} 
                    setPlayerChoosing={setPlayerChoosing}
                    setRandomComputerSelection={setRandomComputerSelection}
                /> : 
                <ComputerChoosing 
                    playerSelection={playerSelection}
                    computerSelection={computerSelection}
                    winner={winner}
                    restart={restart}
                /> 
            }

            <Footer openRules={openRules}/>
            <RulesModal rulesModelOpen={rulesModelOpen} closeRules={closeRules}/>
            <Attribution/>
        </main>
    );
}