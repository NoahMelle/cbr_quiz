"use client";
import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import styles from "./challenge.module.scss";

export default function ChallengePage({ rows }) {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [questionsAnswered, setQuestionsAnswered] = React.useState(0);

    function checkAnswer(event) {
        event.preventDefault();

        const answer = document.querySelector(
            'input[name="answer"]:checked'
        ).value;
        console.log(answer, rows[currentQuestion].options.split(",")[0]);
        if (answer === rows[currentQuestion].options.split(",")[0]) {
            alert("Correct!");
            setCurrentQuestion(currentQuestion + 1);
            setQuestionsAnswered(questionsAnswered + 1);
        }
    }

    function slaVraagOver() {
        setCurrentQuestion(currentQuestion + 1);
    }

    console.log(rows[currentQuestion].type);

    const isYesNo = rows[currentQuestion].options
        .split(",")
        .includes("JA" && "NEE");
    console.log(isYesNo);

    return (
        <div>
            <ProgressBar currentQuestion={currentQuestion} />
            <form
                action="#"
                onSubmit={checkAnswer}
                className={styles.questionForm}
            >
                <h2 className={styles.questionHeader}>
                    {rows[currentQuestion].question}
                </h2>
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
                    {rows[currentQuestion].options
                        .split(",")
                        .map((option, index) => (
                            <label
                                key={index}
                                className={[styles.labelForRadio].join(" ")}
                            >
                                <input
                                    type="radio"
                                    name="answer"
                                    value={option}
                                    className={styles.radioHidden}
                                />
                                {isYesNo ? (
                                    <Image
                                        src={
                                            option === "JA"
                                                ? "/assets/img/vectors/check_circle_24dp_FILL0_wght300_GRAD0_opsz24.svg"
                                                : "/assets/img/vectors/cancel_24dp_FILL0_wght300_GRAD0_opsz24.svg"
                                        }
                                        width={100}
                                        height={100}
                                    />
                                ) : (
                                    ""
                                )}
                                <span className={styles.labelSpan}>{option}</span>
                            </label>
                        ))}
                </div>
                <button type="button" onClick={slaVraagOver}>
                    Skip
                </button>
                <button type="submit">Next</button>
            </form>
        </div>
    );
}
