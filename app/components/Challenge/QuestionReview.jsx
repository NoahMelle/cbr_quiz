import React from "react";
import { decode } from "html-entities";
import styles from "./challenge.module.scss";

export default function QuestionReview({
    isCorrect,
    setCurrentQuestion,
    currentQuestion,
    setScore,
    setIsSubmitted,
    rows,
    setQuestionsAnswered,
}) {
    function nextQuestion(e) {
        if (isCorrect) {
            setScore((prev) => prev + 100);
        }
        setCurrentQuestion((prev) => prev + 1);
        setIsSubmitted(false);
        setQuestionsAnswered((prev) => prev + 1);
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
            <button type="button" onClick={nextQuestion} className={styles.formActionButton}>
                Verder
            </button>
        </div>
    );
}
