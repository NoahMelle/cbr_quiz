"use client";
import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import styles from "./challenge.module.scss";
import QuestionReview from "./QuestionReview";
import { decode } from "html-entities";

export default function ChallengePage({ rows }) {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [questionsAnswered, setQuestionsAnswered] = React.useState(0);
    const [currentValue, setCurrentValue] = React.useState(null);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isCorrect, setIsCorrect] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [options, setOptions] = React.useState([]);
    const [shuffledOptions, setShuffledOptions] = React.useState([]);

    function checkAnswer(event) {
        event.preventDefault();

        const answer = currentValue;

        if (
            answer.toLowerCase() ===
            rows[currentQuestion].options.split("----------")[0].toLowerCase()
        ) {
            setIsCorrect(true);
        }

        setIsSubmitted(true);
    }

    React.useEffect(() => {
        console.log("setting options")
        setCurrentValue(null);
        setIsSubmitted(false);
        setIsCorrect(false);
        setShuffledOptions(options.includes("JA" && "NEE") ? ["JA", "NEE"] : shuffleArray(options))
    }, [options]);

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    console.log(currentQuestion, questionsAnswered)

    function slaVraagOver() {
        setCurrentQuestion(currentQuestion + 1);
    }

    const isYesNo = rows[currentQuestion].options
        .split("----------")
        .includes("JA" && "NEE");

    React.useEffect(() => {
        setOptions(rows[currentQuestion].options.split("----------"));
        console.log("setting options")
    }, [currentQuestion]);

    return (
        <div>
            <ProgressBar currentQuestion={questionsAnswered} score={score} />
            <form
                action="#"
                onSubmit={checkAnswer}
                className={styles.questionForm}
            >
                <h2 className={styles.questionHeader}>
                    {decode(rows[currentQuestion].question)}
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
                    {shuffledOptions.map((option, index) => (
                        <label
                            key={index}
                            className={[
                                styles.labelForRadio,
                                isYesNo
                                    ? option === "JA"
                                        ? styles.ja
                                        : styles.nee
                                    : "",
                                isSubmitted
                                    ? isCorrect
                                        ? styles.labelCorrect
                                        : styles.labelIncorrect
                                    : "",
                            ].join(" ")}
                        >
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                className={styles.radioHidden}
                                onChange={(e) =>
                                    setCurrentValue(e.target.value)
                                }
                                checked={currentValue === option}
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
                                    alt={option === "JA" ? "check" : "cross"}
                                />
                            ) : (
                                ""
                            )}
                            <span className={styles.labelSpan}>
                                {decode(option)}
                            </span>
                        </label>
                    ))}
                </div>
                {isSubmitted ? (
                    <QuestionReview
                        isCorrect={isCorrect}
                        setCurrentQuestion={setCurrentQuestion}
                        currentQuestion={currentQuestion}
                        setQuestionsAnswered={setQuestionsAnswered}
                        questionsAnswered={questionsAnswered}
                        setScore={setScore}
                        score={score}
                        setIsSubmitted={setIsSubmitted}
                        setCurrentValue={setCurrentValue}
                        rows={rows}
                    />
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
