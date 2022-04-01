import React, { useState } from "react";

const Question = ({ question, setScore, score }) => {
  const [isAnswered, setisAnswered] = useState(false);
  return (
    <div>
      <p>{question.question}</p>
      <button
        disabled={isAnswered}
        onClick={() => {
          console.log("correct answer selected!");
          setScore((score += 1));
          setisAnswered(true);
        }}
      >
        {question.correct_answer}
      </button>
      <button
        disabled={isAnswered}
        onClick={() => {
          console.log("correct answer selected!");
          setisAnswered(true);
        }}
      >
        {question.incorrect_answers}
      </button>
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