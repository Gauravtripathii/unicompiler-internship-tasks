import classes from "./Calculator.module.css";
import { useRef } from "react";

function Calculator() {
  const inputBox = useRef();

  function buttonClickHandler(event) {
    if (event.currentTarget.innerText === "=") {
      console.log(eval(inputBox.current.value));
      inputBox.current.value = 0;
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
          <span onClick={buttonClickHandler}>=</span>
          <span onClick={buttonClickHandler}>/</span>
        </p>
      </div>
    </div>
  );
}

export default Calculator;


// THE EVAL IS WORKING, SOMETHING HAPPENES WHEN NUMBER GOES BELOW ZERO, BUT THAT IS JAVASCRIPT'S PROBLEM, NOT YOUR'S. YOUR CODE IS PERFECTLY FINE UPTILL NOW (PLEASE DON'T MESS UP). SO, JUST ADD A BACKSPACE BUTTON AS I KIND OF FORGOT. ADD THAT RANDOM MATHS FUN FACT API THING YOU HAVE BEEN THINKING ABOUT AND FINALLY STYLE THIS SHIT UP.
// - past gaurav ;-)
