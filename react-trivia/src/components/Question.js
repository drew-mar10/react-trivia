import React, { useState } from "react";
import Score from "./Score";
import he from "he";

const Question = ({ question, setScore, score, idx, i, questions, setQuestions, currentQuestion, setCurrentQuestion }) => {
    const [isAnswered, setisAnswered] = useState(false);
    const [correct, setIsCorrect] = useState(false);


    const nextQuest = () => {
        setCurrentQuestion(i+1);
    }

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

    <div className="questDiv">
    
    <p><u>Question {i + 1} / 10</u></p>
    <p>{he.decode(question.question)}</p>

    <div className="answerButts">

        <button className="btn1" key={idx} disabled={isAnswered}
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


        <button className="btn2" key={idx} disabled={isAnswered}
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
    <br/>
    <button className="nextQuest" onClick={() => 
        nextQuest()
        }>
            Next question
    </button>

    <Score
    score={score}
    />
    </div>
    );
};

export default Question;