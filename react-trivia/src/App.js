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
    const [home, setHome] = useState(true)


//Categories

    useEffect(() => {
    axios
    .get(categoriesURL)
    .then((response) => {
        setCategories(response.data.trivia_categories);
    });
    }, []);


//Questions

    useEffect(() => {
    axios
    .get(questionsURL + `${selected}`)
    .then((response) => {
        setQuestions(response.data.results);
        setHome(false)
    });
    }, [selected]);

    if (endGame) {
        return <Score score={score} />;
    }


    return (
    <main>
        <h1><center>Play this trivia</center></h1>

    <div className="container">
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
            <button onClick={() => setEndGame(true)}>Add My Score</button>
        </div>
        ) : (
        categories.map((category) => {
            return (
            <CategorySelect
                key={category.id}
                category={category}
                setSelected={setSelected}/>
            );
        })
        )}
    </div>
    </main>
    );
};

export default App;