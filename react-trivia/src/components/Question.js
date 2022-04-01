import { useState } from "react";


const Question = (props) => {
    const [isCorrect, setIsCorrect] = useState(null);
    const allAnswers = [props.correctAnswer];
        props.incorrectAnswers.forEach((incorrectAnswer) => {
        allAnswers.push(incorrectAnswer);
    });
    const onClick = (text) => {
        console.log(text, props.correctAnswer);
        if (text === props.correctAnswer) {
            setIsCorrect(true);
            props.incrementScore();
        } else {
            setIsCorrect(false);
            props.decrementScore();
        }
    };
    return (
        <>
            <h3 className="question">{props.question}</h3>
            <div className="answerDiv">
                {allAnswers.sort().map((answer, index) => (
                    <button className="answers" onClick={() => onClick(answer)}>
                        {answer}
                    </button>
                ))}
                {isCorrect === true && (
                    <>
                        <div>correct</div>
                    </>
                )}
                {isCorrect === false && <div>incorrect</div>}
            </div>
        </>
    );
};

export { Question }


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