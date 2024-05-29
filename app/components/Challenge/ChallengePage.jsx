'use client'
import React from "react";
import ProgressBar from "./ProgressBar";

export default function ChallengePage({ rows }) {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    function checkAnswer(event) {
        event.preventDefault();

        const answer = document.querySelector('input[name="answer"]:checked').value;
        console.log(answer, rows[currentQuestion].options.split(",")[0]);
        if (answer === rows[currentQuestion].options.split(",")[0]) {
            alert("Correct!");
        }
    }

    return (
        <div>
            <ProgressBar />
            <form action="#" onSubmit={checkAnswer}>
                <h2>{rows[currentQuestion].question}</h2>
                <div>
                    {rows[currentQuestion].options.split(",").map((option, index) => (
                        <label key={index}>
                            <input type="radio" name="answer" value={option} />
                            {option}
                        </label>
                    ))}
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    );
}
