import React, { useState } from "react";
import Question from "./Question";

const Score = ({ score, setHome, setEndGame }) => {
    return (
        <>
    <h2>Your score is: {score}</h2>
    <button className="returnHome"
        onClick={() => {
        setHome(true)
        setEndGame(false)
        }}>
            Home
        </button>
        </>
    )
};

export default Score;