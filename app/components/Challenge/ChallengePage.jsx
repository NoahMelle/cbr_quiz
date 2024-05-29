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
    const [isCorrect, setIsCorrect] = React.useState(false);
    const [score, setScore] = React.useState(0);

    function checkAnswer(event) {
        event.preventDefault();

        const answer = currentValue;

        if (answer === rows[currentQuestion].options.split(",")[0]) {
            setIsCorrect(true);
        }

        setIsSubmitted(true);
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
                                    onInput={(e) =>
                                        setCurrentValue(e.target.value)
                                    }
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
                                <span className={styles.labelSpan}>
                                    {option}
                                </span>
                            </label>
                        ))}
                </div>
                {isSubmitted ? (
                    <QuestionReview isCorrect={isCorrect} />
                ) : (
                    <>
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
