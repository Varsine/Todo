import React, { useState, useContext } from "react"

import { QuizContext } from "App";
import { quizData } from 'data-mockup/quiz-data.mockup'
import Link from "components/Link/Link"
import Button from "components/Button/Button"
import CheckBoxContainer from "components/CheckBoxContainer/CheckBoxContainer"
import Heading from "components/Heading/Heading"
import TextBlock from "components/TextBlock/TextBlock"
import Image from "components/Image/Image"
import QuizPageBg from "assets/QuizPageBg.png"
import LeftIcon from "icons/LeftIcon"
import RightIcon from "icons/RightIcon"

import "./Quiz.scss"

interface IQuizProps { }

const Quiz: React.FC<IQuizProps> = () => {
  const quizContext = useContext(QuizContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const nextQuestionHandler = () => {
    if (currentIndex < quizContext.selectQuiz.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  console.log(quizContext.selectQuiz)
  console.log(currentIndex)

  const prevQuestionHandler = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

// const {options, inputName, question}=quizContext.quizSelection[currentIndex]
  const checkAnswer = (quizId: number, selection: number) => {
    setDisabled(false);
    quizContext.selectQuiz(quizId, selection);
  }

  return (
    <div className="app-quiz">
      <div className="app-quiz__bg-img">
        <Image src={QuizPageBg} />
      </div>
      <div>
        <div className="app-quiz__content">
          <Heading className="app-quiz__content__heading">
            Արի՛ պատասխանենք մի քանի հարցի միասին
          </Heading>
          <div>
            {quizData.map((data, index) => {
              return (
                <span
                  className={`app-quiz__content__dots ${currentIndex === index && "active-dot"
                    }`}
                ></span>
              )
            })}
          </div>
          <TextBlock className="app-quiz__content__question">
            {quizData[currentIndex].question}
          </TextBlock>
          <div className="app-quiz__content__options">
            <div className="app-quiz__content__options__children">
              {currentIndex === 5 && (
                <textarea
                  className="app-quiz__content__options__children__text-area"
                  placeholder={quizData[currentIndex].options[0]}
                ></textarea>
              )}
              {quizData[currentIndex].options.map((option, idx) => {
                  return (
                    <CheckBoxContainer
                      className="app-quiz__content__options__children__option"
                      onClick={() => checkAnswer(quizData[currentIndex].id, idx)}
                      text={option}
                      name={quizData[currentIndex].inputName}
                      selected={quizContext.quizSelection[currentIndex].selection === idx}
                    />
                  )
                })}
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
                  disabled={disabled}
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
  )
}

export default Quiz
