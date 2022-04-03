import React from "react";

const Score = ({ score, home, setEndGame }) => {
    return (
        <>
    <h2>Your score is: {score}</h2>
    <button className="returnHome"
        onClick={() => {
        home(true)
        setEndGame(false)
        }}>
            Home
        </button>
        </>
    )
};

export default Score;