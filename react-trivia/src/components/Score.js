import React from "react";

const Score = ({ score, setHome, setEndGame, setCurrentQuestion, setScore }) => {
    return (
        <>
        <main className="score">
            {/* <button className="h1" onClick={() => {
        //setEndGame(false);
        setHome(true);
        //setQuestions([]); 
        //setScore(0)
        }}>
            It's called Trivi-'ah', not trivi-'uh'
        </button> */}
        <div className="scoreDiv">
            <h2>Your score is: {score}</h2>
        </div>

        <button className="h1" onClick={() => {
        setEndGame(false);
        setHome(true);
        setCurrentQuestion(0); 
        setScore(0)
        }}>
            Play again
        </button>

        </main>
        </>
    );
};

export default Score;