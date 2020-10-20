import React, { useState, useContext } from "react"

import {QuizContext} from "App"
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

interface IQuizProps {}

const Quiz: React.FC<IQuizProps> = () => {
  const quizArray = useContext(QuizContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [disabled, setDisabled] = useState(true)
  const nextQuestionHandler = () => {
    if (currentIndex < quizArray.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      return
    }
  }
  const prevQuestionHandler = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
 

  const checkAnswer = () => {
    setDisabled(false)
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
            {quizArray.map((data, index) => {
              return (
                <span
                  className={`app-quiz__content__dots ${
                    currentIndex === index && "active-dot"
                  }`}
                ></span>
              )
            })}
          </div>
          <TextBlock className="app-quiz__content__question">
            {quizArray[currentIndex].question}
          </TextBlock>
          <div className="app-quiz__content__options">
            <div className="app-quiz__content__options__children">
              {currentIndex === 5 && (
                <textarea
                  className="app-quiz__content__options__children__text-area"
                  placeholder={quizArray[currentIndex].options[0]}
                ></textarea>
              )}
              {currentIndex === 0 &&
                quizArray[0].options.map((option) => {
                  return (
                    <CheckBoxContainer
                      className="app-quiz__content__options__children__option"
                      onClick={checkAnswer}
                      text={option}
                      name={quizArray[0].inputName}
                    />
                  )
                })}
              {currentIndex === 1 &&
                quizArray[1].options.map((option) => {
                  return (
                    <CheckBoxContainer
                      className="app-quiz__content__options__children__option"
                      onClick={checkAnswer}
                      text={option}
                      name={quizArray[1].inputName}
                    />
                  )
                })}
              {currentIndex === 2 &&
                quizArray[2].options.map((option) => {
                  return (
                    <CheckBoxContainer
                      className="app-quiz__content__options__children__option"
                      onClick={checkAnswer}
                      text={option}
                      name={quizArray[2].inputName}
                    />
                  )
                })}
              {currentIndex === 3 &&
                quizArray[3].options.map((option) => {
                  return (
                    <CheckBoxContainer
                      className="app-quiz__content__options__children__option"
                      onClick={checkAnswer}
                      text={option}
                      name={quizArray[3].inputName}
                    />
                  )
                })}
              {currentIndex === 4 &&
                quizArray[4].options.map((option) => {
                  return (
                    <CheckBoxContainer
                      className="app-quiz__content__options__children__option"
                      onClick={checkAnswer}
                      text={option}
                      name={quizArray[4].inputName}
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
