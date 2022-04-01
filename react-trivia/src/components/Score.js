import React, { useEffect } from 'react';

const Score = ({ isCorrect, score, setScore }) => {
    
    useEffect(() => {
        if (isCorrect === true) {
            setScore(score + 1)
        }
    }, [isCorrect])

    return (
        <div>
            <p>Score: {score}</p>
        </div>
    );
}

export { Score }