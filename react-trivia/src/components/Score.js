import React from "react";

const Score = ({ score, setHome, setEndGame, setCurrentQuestion, currentQuestion }) => {
    return (
        <>
        <main>
            <h1>Results</h1>
    <h2>Your score is: {score}</h2>
        </main>
        </>
    );
};

export default Score;