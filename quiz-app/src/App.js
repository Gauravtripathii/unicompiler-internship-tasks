import Quiz from "./components/Quiz";
import { useState, useEffect } from "react";

function App() {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions").then((response) => {
      return response.json();
    }).then((data) => {
      setQuizes(data);
    })
  }, []);

  const [count, setCount] = useState(0);

  function addCountHandler() {
    setCount(count+1);
  }

  return (
    <div className="main">
      <h1>Quizzer!</h1>
      {quizes.map((quiz) => (
        <Quiz key={quiz.key} question={quiz.question} correctAnswer={quiz.correctAnswer} incorrectAnswers={quiz.incorrectAnswers} addCountHandler={addCountHandler} />
      ))}
      <div className="score">{count}/10</div>
    </div>
  );
}

export default App;
