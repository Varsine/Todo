import React, {useState} from "react";

import Link from "components/Link/Link";
import Button from "components/Button/Button";
import CheckBoxContainer from "components/CheckBoxContainer/CheckBoxContainer";
import Heading from "components/Heading/Heading";
import TextBlock from "components/TextBlock/TextBlock";
import Image from "components/Image/Image";
import QuizPageBg from "assets/QuizPageBg.png";
import LeftIcon from "icons/LeftIcon";
import RightIcon from "icons/RightIcon";
import {quizData} from "data-mockup/quiz-data.mockup";

import "./Quiz.scss";

interface IQuizProps {}

const Quiz: React.FC<IQuizProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [disabled, setDisabled] = useState(true)

  const nextQuestionHandler = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1)
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
  const {options, inputName, question, note} = quizData[currentIndex]
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
                  className={`app-quiz__content__dots ${
                    currentIndex === index && "active-dot"
                  }`}
                ></span>
              )
            })}
          </div>
          <TextBlock className="app-quiz__content__question">
            {question}
          </TextBlock>
          <div className="app-quiz__content__options">
            <div>
              {currentIndex === 5 ? (
                <textarea
                  className="app-quiz__content__options__text-area"
                  placeholder={note}
                ></textarea>
              ) : (
                options.map((option) => {
                  return (
                    <CheckBoxContainer
                      onClick={checkAnswer}
                      text={option}
                      name={inputName}
                    />
                  )
                })
              )}
            </div>
          </div>
          <div className=" app-quiz__content__button">
            {
              <Link to="">
                <Button
                  className=" app-quiz__content__button__prev"
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
                  className=" app-quiz__content__button__next"
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

export default Quiz;