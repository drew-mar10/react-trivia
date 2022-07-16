import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelect from "./components/CategorySelect";
import Question from "./components/Question";
import Score from "./components/Score";
import './App.css';

const App = () => {
    const categoriesURL = "https://opentdb.com/api_category.php";
    const questionsURL = "https://opentdb.com/api.php?amount=10&type=boolean&category=";
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [endGame, setEndGame] = useState(false);
    const [home, setHome] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const refreshPage = () => {
        window.location.reload(false)
    }


//Categories
    useEffect(() => {
    axios
    .get(categoriesURL)
    .then((response) => {
        setCategories(response.data.trivia_categories);
    });
    }, [endGame]);

//Questions
    useEffect(() => {
    axios
    .get(questionsURL + `${selected}`)
    .then((response) => {
        setQuestions(response.data.results);
        setHome(false)
    });
    }, [selected]);



    if (endGame && !home) {
        return (
        <>
        <Score
            score={score}
            setScore={setScore}
            setHome={setHome}
            home={home}
            setEndGame={setEndGame}
            setCurrentQuestion={setCurrentQuestion}
        />
    </>
    );
}

    return (
    <main>
        <div className="headerDiv">
        <button className="h1"
        onClick={() =>
        refreshPage(true)}
        >
            <center>
                It's called Trivi-'ah', not trivi-'uh'
            </center>
        </button>
        </div>

    <div>
        {questions.length > 0 && !home ? (
        <div>
            <button
            onClick={() => setHome(true)}>
                Return Home/Change Category
            </button>
        {questions.map((question, idx) => {
            if (idx === currentQuestion) {
            return (
                <Question
                key={idx}
                question={question}
                setScore={setScore}
                score={score}
                questions={questions}
                setQuestions={setQuestions}
                setCurrentQuestion={setCurrentQuestion}
                i={idx}
                currentQuestion={currentQuestion}
                setEndGame={setEndGame}
                />
            );
            } else {
                return null
            }
            })}

        </div>
        ) : (
        categories.map((category) => {
            return (
                <div className="categoryQuestion">
            <CategorySelect
                key={category.id}
                category={category}
                setSelected={setSelected}
                setHome={setHome}
                />
                </div>
            );
        })
        )}
    </div>
    </main>
    );
};

export default App;