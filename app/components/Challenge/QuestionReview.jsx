import React from "react";

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
        console.log("question check " + currentQuestion);
        setIsSubmitted(false);
    }

    return (
        <div>
            <p>{isCorrect ? "correct" : "incorrect"}</p>
            <p>{rows[currentQuestion].feedback}</p>
            <button type="button" onClick={nextQuestion}>Verder</button>
        </div>
    );
}
