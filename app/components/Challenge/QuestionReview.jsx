import React from "react";
export default function QuestionReview({ isCorrect  ,  setCurrentQuestion  ,  currentQuestion  ,  setQuestionsAnswered  ,  questionsAnswered  , setScore, score  }){
    function nextQuestion(){
        setCurrentQuestion(currentQuestion + 1);
        setQuestionsAnswered(questionsAnswered + 1);
        setScore(score + 100);
    }

    return (
        <form action="#" onSubmit={nextQuestion}>
        <div>
            <p>{isCorrect ? "correct" : "incorrect"}</p>
            <p>de feedback </p>
            <button>Verder</button>
        </div>
        </form>
    )
}