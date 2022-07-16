import classes from "./Calculator.module.css";
import { useRef } from "react";

function Calculator() {
  const inputBox = useRef();

  function buttonClickHandler(event) {
    if (event.currentTarget.innerText === "⌫") {
      inputBox.current.value = inputBox.current.value.substr(0, inputBox.current.value.length-1);
    } else if (event.currentTarget.innerText === "x-1") {
      inputBox.current.value = inputBox.current.value ** -1;
    } else if (event.currentTarget.innerText === "C") {
      inputBox.current.value = "";
    } else if (event.currentTarget.innerText === "=") {
      inputBox.current.value = eval(inputBox.current.value);
    } else {
      inputBox.current.value += event.currentTarget.innerText;
    }
  }
  return (
    <div className={classes.calc}>
      <p>
        <input type="text" ref={inputBox} />
      </p>
      <div className={classes.buttonContainer}>
        <p>
          <span onClick={buttonClickHandler}>
            x<sup>-1</sup>
          </span>
          <span onClick={buttonClickHandler}>⌫</span>
          <span onClick={buttonClickHandler}>C</span>
        </p>
        <p>
          <span onClick={buttonClickHandler}>1</span>
          <span onClick={buttonClickHandler}>2</span>
          <span onClick={buttonClickHandler}>3</span>
          <span onClick={buttonClickHandler}>+</span>
        </p>
        <p>
          <span onClick={buttonClickHandler}>4</span>
          <span onClick={buttonClickHandler}>5</span>
          <span onClick={buttonClickHandler}>6</span>
          <span onClick={buttonClickHandler}>-</span>
        </p>
        <p>
          <span onClick={buttonClickHandler}>7</span>
          <span onClick={buttonClickHandler}>8</span>
          <span onClick={buttonClickHandler}>9</span>
          <span onClick={buttonClickHandler}>*</span>
        </p>
        <p>
          <span onClick={buttonClickHandler}>0</span>
          <span onClick={buttonClickHandler}>.</span>
          <span onClick={buttonClickHandler} class={classes.equalto}>=</span>
          <span onClick={buttonClickHandler}>/</span>
        </p>
      </div>
    </div>
  );
}

export default Calculator;
