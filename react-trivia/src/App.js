import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelect from "./components/CategorySelect";
import Question from "./components/Question";
import Score from "./components/Score";

const App = () => {
    const categoriesURL = "https://opentdb.com/api_category.php";
    const questionsURL =
      "https://opentdb.com/api.php?amount=10&type=boolean&category=";
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [endGame, setEndGame] = useState(false);
  
    // ask for a list of categories
    useEffect(() => {
      axios.get(categoriesURL).then((response) => {
        setCategories(response.data.trivia_categories);
      });
    }, []);
  
    // useEffect(() => {}, [])
  
    // ask for a list questions based off the selected category
    useEffect(() => {
      axios.get(questionsURL + `${selected}`).then((response) => {
        console.log(response);
        setQuestions(response.data.results);
      });
    }, [selected]);
  
    if (endGame) {
      return <Score score={score} />;
    }
  
    return (
      // Ternary operator syntax
      // condition ? what to do if true : what to do if false
      <div id="container">
        {questions.length > 0 ? (
          <div>
            {questions.map((question, idx) => {
              return (
                <Question
                  key={idx}
                  question={question}
                  setScore={setScore}
                  score={score}
                />
              );
            })}
            <button onClick={() => setEndGame(true)}>Finish Game</button>
          </div>
        ) : (
          categories.map((category) => {
            return (
              <CategorySelect
                key={category.id}
                category={category}
                setSelected={setSelected}
              />
            );
          })
        )}
      </div>
    );
  };
  
  export default App;
  





// import React from "react";
// import { Categories } from "./components/Categories";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Question } from "./components/Question";
// import he from "he";

// const App = () => {

//     const [categories, setCategories] = useState([]);
//     const [question, setQuestion] = useState(null);
//     //
//     const [score, setScore] = useState(0);
//     useEffect(() => {
//         axios.get("https://opentdb.com/api_category.php").then((response) => {
//             setCategories(response.data.trivia_categories);
//         });
//     }, []);

//     const getQuestion = (id) => {
//         axios
//             .get(`https://opentdb.com/api.php?amount=1&category=${id}`)
//             .then((response) => {
//                 const rawQuestion = response.data.results[0];
//                 const newQuestion = {
//                     ...rawQuestion,
//                     question: he.decode(rawQuestion.question),
//                     correct_answer: he.decode(rawQuestion.correct_answer),
//                     incorrect_answers: rawQuestion.incorrect_answers.map(
//                         (answer) => {
//                             return he.decode(answer);
//                         }
//                     ),
//                 };
//                 setQuestion(newQuestion);
//             });
//     };
//     return (
//         <div>
//             <div className="title">
//                 <header>
//                     <h1>React Trivia</h1>
//                 </header>
//             </div>
//             <div className="directions">
//                 {question ? (
//                     <h3>Question</h3>
//                 ) : (
//                     <h3>
//                         {/* Trivia */}
//                     </h3>
//                 )}
//             </div>
//             <div>
//                 {question ? (
//                     <Question
//                         question={question.question}
//                         correctAnswer={question.correct_answer}
//                         incorrectAnswers={question.incorrect_answers}
//                         incrementScore={() => {
//                             setScore(score + 1);
//                         }}
//                         decrementScore={() => {
//                             setScore(score - 1);
//                         }}
//                     />
//                 ) : (
//                     <ul className="categorylist">
//                         {categories.map((category, index) => (
//                             <Categories
//                                 name={category.name}
//                                 key={index}
//                                 onClick={() => {
//                                     getQuestion(category.id);
//                                 }}
//                             />
//                         ))}
//                     </ul>
//                 )}
//                 <div>
//                     {question && (
//                         <button
//                             className="home"
//                             onClick={() => setQuestion(null)}
//                         >
//                             Home
//                         </button>
//                     )}
//                 </div>
//             </div>
//             <div className="score">Score: {score}</div>
//         </div>
//     );
// };

// export default App