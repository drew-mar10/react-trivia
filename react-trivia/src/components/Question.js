import React, { useState } from "react";
import { decode } from "html-entities";

const Question = ({ question, setScore, score, idx, setHome }) => {
    const [isAnswered, setisAnswered] = useState(false);
    const [correct, setIsCorrect] = useState(false)

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
    {/* <div className="homeButt">
        <button onClick={() => setHome(true)}>Home</button>
    </div> */}

    <div className="questionQuestion">
        <p>{question.question}</p>

    <div className="answerButts">

        <button {...decode} id="btn1" key={idx} disabled={isAnswered}
        onClick={()=> { 
            if (shuffledAnswers[0] === question.correct_answer) { 
                    console.log('correct answer selected')
                setScore((score += 1))
                    console.log(score)
                setisAnswered(true)
                setIsCorrect(true)
            } else { 
                    console.log('incorrect answer selected')
                setIsCorrect(false)
                setisAnswered(true)
            }}}>

        {shuffledAnswers[0]}</button>

        <button {...decode} id= "btn2" key={idx} disabled={isAnswered}
        onClick={()=> { 
            if (shuffledAnswers[1] === question.correct_answer) { 
                    console.log('correct answer selected')
                setScore((score += 1))
                    console.log(score)
                setisAnswered(true)
                setIsCorrect(true)
            } else { 
                    console.log('incorrect answer selected')
                setIsCorrect(false)
                setisAnswered(true)
            }}}>

        {shuffledAnswers[1]}</button>

        <button {...decode} id="btn3" key={idx} disabled={isAnswered}
        onClick={()=> { 
            if (shuffledAnswers[2] === question.correct_answer) { 
                    console.log('correct answer selected')
                setScore((score += 1))
                    console.log(score)
                setisAnswered(true)
                setIsCorrect(true)
            } else { 
                    console.log('incorrect answer selected')
                setIsCorrect(false)
                setisAnswered(true)
            }}}>

        {shuffledAnswers[2]}</button>

        {/* <button id= "btn4" key={idx} disabled={isAnswered}
        onClick={()=> { 
            if (shuffledAnswers[1] === question.correct_answer) { 
                    console.log('correct answer selected')
                setScore((score += 1))
                    console.log(score)
                setisAnswered(true)
                setIsCorrect(true)
            } else { 
                    console.log('incorrect answer selected')
                setIsCorrect(false)
                setisAnswered(true)
            }}}>

        {shuffledAnswers[4]}</button> */}

    </div>
    </div>
    </div>
    );
};

export default Question;


//   // const getQuestion = (id) => {
//   //   axios
//   //     .get(`https://opentdb.com/api.php?amount=10&category=${id}`)
//   //     .then((response) => {
//   //       setQuestion(response.data.results[0])
//   //     },);

// {/* <button className="home" onClick={() => setQuestion(null)}>Home</button>

// <div className="questionCode">
// {question ? <Question
// question={question.question}
// correctAnswer={question.correct_answer}
// incorrectAnswers={question.incorrect_answers}/>:


// (<ul className="catList">
// {categories.map((category, index) => (
//   <ul><Categories 
//   name={category.name}
//   key={index}
//   id={category.id}
// onClick={() => {
//     getQuestion(category.id)}}/></ul>
// ))}
// </ul>)}
// </div>
// </div>
// </div> */}