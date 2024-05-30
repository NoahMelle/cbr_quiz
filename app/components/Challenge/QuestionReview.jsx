import React from "react";
import { decode } from "html-entities";
import styles from "./challenge.module.scss";

export default function QuestionReview({
  isCorrect,
  setCurrentQuestion,
  currentQuestion,
  setIsSubmitted,
  rows,
  setQuestionsAnswered,
  questionsAnswered,
  setAtFinalQuestion
}) {
  function nextQuestion(e) {
    setCurrentQuestion((prev) => prev + 1);
    setIsSubmitted(false);
    setQuestionsAnswered((prev) => prev + 1);
    if (questionsAnswered === 9) {
        setAtFinalQuestion(true);
    }
  }

  return (
    <div
      className={[
        styles.questionReviewContainer,
        isCorrect ? styles.correct : styles.inCorrect,
      ].join(" ")}
    >
      <h3 className={styles.correctText}>
        {isCorrect ? "Correct!" : "Incorrect!"}
      </h3>
      <p>{decode(rows[currentQuestion].feedback)}</p>
      <button
        type="button"
        onClick={nextQuestion}
        className={styles.formActionButton}
      >
        Verder
      </button>
    </div>
  );
}
