// // questioncounter
// import React, { useState, useEffect } from 'react';

// const QuestionCount = ({ questions, questionsIndex }) => {
//     const [ currentQuestion, setCurrentQuestion ] = useState(0)
//     const [ totalQuestions ] = useState(questions.length)

//     useEffect(() => {
//         setCurrentQuestion(currentQuestion + 1)
//     }, [questionsIndex])   

//     return (
//         <div>
//             <p>Question {currentQuestion} of {totalQuestions}</p>
//         </div>
//     );
// }

// export { QuestionCount }