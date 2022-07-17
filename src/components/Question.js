import React, { useState } from "react";
import Score from "./Score";
import he from "he";

const Question = ({ question, setScore, score, idx, i, questions, setQuestions, currentQuestion, setCurrentQuestion, endGame, setEndGame, home, setHome,triviaData, setTriviaData, setCurrentPage, restartTrivia, showScore, getFinalScore, setShowScore }) => {
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
    }}

    const shuffledAnswers = allAnswersArray
        shuffleArray(shuffledAnswers)


    return (

    <div className="questDiv">

        <div className="scoreDiv">
            <h2>Your score is: {score}</h2>
        </div>

    <div className="questionNumber">
    <p><u>Question {i + 1} / 10</u></p>
    </div>

    <div className="questionDisplay">
        <p>{he.decode(question.question)}</p>
    </div>

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

    <div className="bottomButts">
    <button className="nextQuest" onClick={() => {
        if (i <=9 && isAnswered) {
            nextQuest()
        }
        if (i >= 9 && isAnswered) {
            setEndGame(true)}
    }}>
        Next Question
    </button>

    {/* <button className="changeCategory"
    onClick={() => setHome(true)}>
        Return Home/Change Category
    </button> */}
    </div>

    </div>
    );
};

export default Question;