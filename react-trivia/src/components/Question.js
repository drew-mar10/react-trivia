import React, { useState } from "react";
import { decode } from "html-entities";


const Question = ({ question, setScore, score, idx, setHome }) => {
    const [isAnswered, setisAnswered] = useState(false);
    const [correct, setIsCorrect] = useState(false);

    let allAnswersArray =  question.incorrect_answers;
        allAnswersArray = [...allAnswersArray, question.correct_answer ]


    const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
    const shuffledAnswers = allAnswersArray
        shuffleArray(shuffledAnswers)


    return (

<div className="questContainer">
    
    <p>{question.question}</p>

    <div className="answerButts">

        <button {...decode} id="btn1" key={idx} disabled={isAnswered}
        onClick={()=> { 
            if (shuffledAnswers[0] === question.correct_answer) { 
                setScore((score += 1))
                setisAnswered(true)
                setIsCorrect(true)
            } else { 
                setIsCorrect(false)
                setisAnswered(true)
            }}}>

        {shuffledAnswers[0]}</button>


        <button id= "btn-2" key={idx} disabled={isAnswered}
            onClick={()=> { 
            if (shuffledAnswers[1] === question.correct_answer) { 
            setScore((score += 1))
                setisAnswered(true)
                setIsCorrect(true)
            } else { 
                setIsCorrect(false)
                setisAnswered(true)
            }}}>

        {shuffledAnswers[1]}</button>
    </div>
    </div>
    );
};

export default Question;