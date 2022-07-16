import React from "react";

const Score = ({ score }) => {

    const refreshPage = () => {
        window.location.reload(false)
    }

    return (

    <main className="score">
        <div className="scoreDiv">
            <h2>Your final score is: {score}</h2>
        </div>

        <button
            className="playAgain"
            onClick={() =>
                refreshPage(true)
        }>
            Play again?
        </button>

    </main>
    
    );
};

export default Score;