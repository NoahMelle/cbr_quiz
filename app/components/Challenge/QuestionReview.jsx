import React from "react";
import { decode } from "html-entities";
import styles from "./challenge.module.scss";

export default function QuestionReview({
    isCorrect,
    setCurrentQuestion,
    currentQuestion,
    setScore,
    setIsSubmitted,
    rows
}) {
    function nextQuestion(e) {
        if (isCorrect) {
            setScore(prev => prev + 100);
        
        }
        setCurrentQuestion(prev => prev + 1);
        setIsSubmitted(false);
    }

    return (
        <div className={styles.questionReviewContainer}>
            <h3 className={styles.correctText}>{isCorrect ? "Correct!" : "Incorrect!"}</h3>
            <p>{decode(rows[currentQuestion].feedback)}</p>
            <button type="button" onClick={nextQuestion}>Verder</button>
        </div>
    );
}
