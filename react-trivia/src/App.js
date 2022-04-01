import React from "react";
import { Categories } from "./components/Categories";
import { useEffect, useState } from "react";
import axios from "axios";
import { Question } from "./components/Question";
import he from "he";

const App = () => {

    const [categories, setCategories] = useState([]);
    const [question, setQuestion] = useState(null);
    //
    const [score, setScore] = useState(0);
    useEffect(() => {
        axios.get("https://opentdb.com/api_category.php").then((response) => {
            setCategories(response.data.trivia_categories);
        });
    }, []);

    const getQuestion = (id) => {
        axios
            .get(`https://opentdb.com/api.php?amount=1&category=${id}`)
            .then((response) => {
                const rawQuestion = response.data.results[0];
                const newQuestion = {
                    ...rawQuestion,
                    question: he.decode(rawQuestion.question),
                    correct_answer: he.decode(rawQuestion.correct_answer),
                    incorrect_answers: rawQuestion.incorrect_answers.map(
                        (answer) => {
                            return he.decode(answer);
                        }
                    ),
                };
                setQuestion(newQuestion);
            });
    };
    return (
        <div>
            <div className="title">
                <header>
                    <h1>React Trivia</h1>
                </header>
            </div>
            <div className="directions">
                {question ? (
                    <h3>Question</h3>
                ) : (
                    <h3>
                        {/* Trivia */}
                    </h3>
                )}
            </div>
            <div>
                {question ? (
                    <Question
                        question={question.question}
                        correctAnswer={question.correct_answer}
                        incorrectAnswers={question.incorrect_answers}
                        incrementScore={() => {
                            setScore(score + 1);
                        }}
                        decrementScore={() => {
                            setScore(score - 1);
                        }}
                    />
                ) : (
                    <ul className="categorylist">
                        {categories.map((category, index) => (
                            <Categories
                                name={category.name}
                                key={index}
                                onClick={() => {
                                    getQuestion(category.id);
                                }}
                            />
                        ))}
                    </ul>
                )}
                <div>
                    {question && (
                        <button
                            className="home"
                            onClick={() => setQuestion(null)}
                        >
                            Home
                        </button>
                    )}
                </div>
            </div>
            <div className="score">Score: {score}</div>
        </div>
    );
};

export default App