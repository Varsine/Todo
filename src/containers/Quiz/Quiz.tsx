import React, { useState, useContext } from "react";

import { QuizContext } from "App";
import Link from "components/Link/Link";
import Button from "components/Button/Button";
import CheckBoxContainer from "components/CheckBoxContainer/CheckBoxContainer";
import Heading from "components/Heading/Heading";
import TextBlock from "components/TextBlock/TextBlock";
import Image from "components/Image/Image";
import ProgressBar from "components/ProgressBar/ProgressBar";
import AgeSlider from "components/AgeSlider/AgeSlider";
import QuizPageBg from "assets/QuizPageBg.png";
import LeftIcon from "icons/LeftIcon";
import RightIcon from "icons/RightIcon";


import "./Quiz.scss"

interface IQuizProps { }

const Quiz: React.FC<IQuizProps> = () => {
  const quizContext = useContext(QuizContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [currentAge, setCurrentAge] = useState(24);

  const nextAgeHandler = () => {
    setCurrentAge(currentAge + 1)
  }
  const prevAgeHandler = () => {
    setCurrentAge(currentAge - 1)
  }

  const nextQuestionHandler = () => {
    if (currentIndex < quizContext.quizData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevQuestionHandler = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const checkAnswer = (quizId: number, selection: number) => {
    setDisabled(false);
    quizContext.selectQuiz(quizId, selection);
  }

  const { options, id, inputName, selection, question } = quizContext.quizData[currentIndex];

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    quizContext.selectQuiz(id, e.target.value);
  }

  return (
    <div className="app-quiz">
      <div className="app-quiz__bg-img">
        <Image src={QuizPageBg} />
      </div>
      <div>
        <div className="app-quiz__content">
          <div>
            <Heading className="app-quiz__content__heading">
              Արի՛ պատասխանենք մի քանի հարցի միասին
          </Heading>
            <ProgressBar
              arrayLength={quizContext.quizData.length}
              currentDot={currentIndex}
            />
            <TextBlock className="app-quiz__content__question">
              {question}
            </TextBlock>
            <div className="app-quiz__content__options">
              <div className="app-quiz__content__options__children">
                {currentIndex !== 1 && currentIndex !== 5 ? (
                  options.map((option, idx) => (
                    <CheckBoxContainer
                      key={`${id}-${option}`}
                      className="app-quiz__content__options__children__option"
                      onClick={() => checkAnswer(id, idx)}
                      text={option}
                      name={inputName}
                      selected={selection === idx}
                    />
                  ))) : currentIndex === 1 ? (
                    <AgeSlider
                      id={id}
                      nextAge={nextAgeHandler}
                      prevAge={prevAgeHandler}
                      currentAge={currentAge}
                      selection={selection}
                      onClick={checkAnswer}
                    />
                  ) : (
                      <textarea
                        className="app-quiz__content__options__children__text-area"
                        placeholder={options[0]}
                        value={selection || ''}
                        onChange={handleTextInput}
                      />
                    )
                }
              </div>
            </div>
            <div className="app-quiz__content__button">
              {
                <Link to="">
                  <Button
                    className="app-quiz__content__button__prev"
                    disabled={disabled}
                    onClick={prevQuestionHandler}
                  >
                    <LeftIcon /> Հետ
                </Button>
                </Link>
              }
              {
                <Link to="">
                  <Button
                    className="app-quiz__content__button__next"
                    disabled={disabled || selection === null}
                    onClick={nextQuestionHandler}
                  >
                    Առաջ <RightIcon />
                  </Button>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz;