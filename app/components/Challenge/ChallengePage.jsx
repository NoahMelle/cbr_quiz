"use client";
import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import styles from "./challenge.module.scss";
import QuestionReview from "./QuestionReview";

export default function ChallengePage({ rows }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [questionsAnswered, setQuestionsAnswered] = React.useState(0);
  const [currentValue, setCurrentValue] = React.useState(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  var isAnswered = false;
  const [isCorrect, setIsCorrect] = React.useState(false)

  function checkAnswer(event) {
    event.preventDefault();

    const answer = currentValue;

    if (answer === rows[currentQuestion].options.split(",")[0]) {
        setIsCorrect = true;
    //   alert("Correct!");
    //   setCurrentQuestion(currentQuestion + 1);
    //   setQuestionsAnswered(questionsAnswered + 1);
    }

    setIsSubmitted(true)
  }

  function slaVraagOver() {
    setCurrentQuestion(currentQuestion + 1);
  }

  const isYesNo = rows[currentQuestion].options
    .split(",")
    .includes("JA" && "NEE");

  console.log(currentValue);

  return (
    <div>
      <ProgressBar questionsAnswered={questionsAnswered} />
      <form action="#" onSubmit={checkAnswer}>
        <h2>{rows[currentQuestion].question}</h2>
        <img
          src={`/assets/img/questions/${rows[currentQuestion].image}`}
          className={styles.questionImage}
          alt=""
        />
        <div
          className={[
            isYesNo ? styles.isBoolean : "",
            styles.radioContainer,
          ].join(" ")}
        >
          {rows[currentQuestion].options.split(",").map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                value={option}
                className={styles.radioHidden}
                onInput={(e) => setCurrentValue(e.target.value)}
              />
              <span className={[styles.labelForRadio].join(" ")}>{option}</span>
            </label>
          ))}
        </div>
        {isSubmitted ? (
          <QuestionReview isCorrect={isCorrect}/>
        ) : (
          <>
            {" "}
            <button type="button" onClick={slaVraagOver}>
              Overslaan
            </button>
            <button id="endbutton" disabled={currentValue === null}>
              Controleer
            </button>
          </>
        )}
      </form>
    </div>
  );
}
