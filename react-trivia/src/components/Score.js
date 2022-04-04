import React from "react";

const Score = ({ score, setHome, setEndGame, setQuestions, setScore }) => {
    return (
        <>
        <main>
            <button className="h1" onClick={() => {
        setEndGame(false);
        setHome(true);
        setQuestions([]); 
        setScore(0)}}>
            It's called Trivi-'ah', not trivi-'uh'
        </button>
        <div className="scoreDiv">
            <h2>Your score is: {score}</h2>
        </div>
        </main>
        </>
    );
};

export default Score;