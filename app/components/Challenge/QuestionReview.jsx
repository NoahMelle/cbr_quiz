import React from "react";

export default function QuestionReview({
    isCorrect,
    setCurrentQuestion,
    currentQuestion,
    setQuestionsAnswered,
    questionsAnswered,
    setScore,
    score,
}) {
    function nextQuestion(e) {
        setCurrentQuestion(currentQuestion + 1);
        setQuestionsAnswered(questionsAnswered + 1);
        setScore(score + 100);
    }

    return (
        <div>
            <p>{isCorrect ? "correct" : "incorrect"}</p>
            <p>de feedback </p>
            <button type="button" onClick={nextQuestion}>Verder</button>
        </div>
    );
}
