"use client";
import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import styles from "./challenge.module.scss";
import Link from "next/link";
import QuestionReview from "./QuestionReview";
import { decode } from "html-entities";
import Countdown from "./Countdown";

export default function ChallengePage({ rows }) {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [questionsAnswered, setQuestionsAnswered] = React.useState(0);
    const [currentValue, setCurrentValue] = React.useState(null);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isCorrect, setIsCorrect] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [options, setOptions] = React.useState([]);
    const [shuffledOptions, setShuffledOptions] = React.useState([]);
    const [atFinalQuestion, setAtFinalQuestion] = React.useState(false);
    const [timeUp, setTimeUp] = React.useState(false);

    function checkAnswer(event) {
        event.preventDefault();

        const answer = currentValue;

        if (
            answer.toLowerCase() ===
            rows[currentQuestion].options.split("----------")[0].toLowerCase()
        ) {
            setIsCorrect(true);
            setScore((prev) => prev + 100);
        }

        setIsSubmitted(true);
    }

    React.useEffect(() => {
        console.log("setting options");
        setCurrentValue(null);
        setIsSubmitted(false);
        setIsCorrect(false);
        setShuffledOptions(
            options.includes("JA" && "NEE")
                ? ["JA", "NEE"]
                : shuffleArray(options)
        );
    }, [options]);

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    }

    React.useEffect(() => {
        if (timeUp) {
            setIsCorrect(false);
            setIsSubmitted(true);
        }
    }, [timeUp])

    // console.log(currentQuestion, questionsAnswered)

    function slaVraagOver() {
        if (currentQuestion - questionsAnswered <= 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    }

    const isYesNo = rows[currentQuestion].options
        .split("----------")
        .includes("JA" && "NEE");

    React.useEffect(() => {
        setOptions(rows[currentQuestion].options.split("----------"));
        // console.log("setting options")
    }, [currentQuestion]);

    var accuratie = score / 10;

    return (
        <div>
            {atFinalQuestion ? (
                <div className={styles.questionsSummary}>
                    <Image 
                        src="/assets/img/misc/duo-trophy.png"
                        width={100}
                        height={100}
                        alt="Trophy"
                    />
                    <h3>Oefening afgemaakt!</h3>
                    <p>Behaalde score: <b>{score}</b></p>
                    <p>accuratie: <b>{accuratie}</b>%</p>
                    <Link href="/" className={styles.terugNaarOverzicht}>Terug naar overzicht</Link>
                </div>
            ) : (
                <div>
                    <ProgressBar
                        currentQuestion={questionsAnswered}
                        score={score}
                    />
                    <Countdown timeUp={timeUp} setTimeUp={setTimeUp} isSubmitted={isSubmitted} currentQuestion={currentQuestion} />

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
                                            alt={
                                                option === "JA"
                                                    ? "check"
                                                    : "cross"
                                            }
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
                                setAtFinalQuestion={setAtFinalQuestion}
                                timeUp={timeUp}
                                setTimeUp={setTimeUp}
                            />
                        ) : (
                            <div className={styles.actionsContainer}>
                                <button type="button" onClick={slaVraagOver} className={styles.formActionButton + " " + styles.skipButton} >
                                    Overslaan
                                </button>
                                <button
                                    id="endbutton"
                                    className={styles.formActionButton + " " + styles.checkButton}
                                    disabled={currentValue === null}
                                >
                                    Controleer
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
}
