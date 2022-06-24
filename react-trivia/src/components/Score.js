import React from "react";

const Score = ({ score, getFinalScore, setShowScore, showScore, setHome, setEndGame, setCurrentQuestion, setScore, restartTrivia, currentPage }) => {
    return (

        <main className="score">

        <div className="scoreDiv">
            <h2>Your final score is: {score}</h2>
        </div>

        <button className="h1" onClick={() => {
        setEndGame(true);
        setHome(true);
        // setCurrentQuestion(0); 
        setScore(0);
        restartTrivia(true);
        // currentPage(true);
        }}>
            Play again?
        </button>

        </main>
    
    );
};

export default Score;