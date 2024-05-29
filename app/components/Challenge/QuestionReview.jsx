import React from "react";
export default function QuestionReview({ isCorrect  }){
    console.log(isCorrect);
    return (
        <div>
            <p>{isCorrect}</p>
            <p>de feedback </p>
            <button>Verder</button>
        </div>
    )
}