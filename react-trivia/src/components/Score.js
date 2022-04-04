import React from "react";

const Score = ({ score, questions, setHome, setEndGame }) => {
    return (
        <>
        <main>
            <h1>Results</h1>
    <h2>Your score is: {score}</h2>
        </main>
        </>
    )
};

export default Score;