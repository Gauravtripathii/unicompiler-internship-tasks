import {useRef} from "react";

function Quiz(props) {
  const parentDiv = useRef();
  const answers = [];
  
  for (var a = 0; a < props.incorrectAnswers.length; a++) {
    const b = props.incorrectAnswers[a]
    answers.push([b, false, a]);
  }
  const randIndex = Math.ceil(Math.random() * 3) - 1;
  answers.splice(randIndex, 0, [props.correctAnswer, true, 3]);

  const count = 0;

  function correctAnswerHandler()
  {
    parentDiv.current.classList.add('correct-selected');
    props.addCountHandler();
  }

  function incorrectAnswerHandler()
  {
    parentDiv.current.classList.add('incorrect-selected');
  }

  return (
    <div className="quiz" ref={parentDiv}>
      <p>{props.question}</p>
      <ul>
        {answers.map((answer) => (
          <li onClick={answer[1] ? correctAnswerHandler : incorrectAnswerHandler} key={answer[2]}>{answer[0]}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
