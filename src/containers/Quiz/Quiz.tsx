import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";

import { AppContext } from "app-context/appContext";
import { ActionTypes } from "app-context/actionTypes";
import Button from "components/Button/Button";
import CheckBoxContainer from "components/CheckBoxContainer/CheckBoxContainer";
import Heading from "components/Heading/Heading";
import TextBlock from "components/TextBlock/TextBlock";
import Image from "components/Image/Image";
import AgeSlider from "components/AgeSlider/AgeSlider";
import ProgressBar from "components/ProgressBar/ProgressBar";
import TextareaField from "components/TextareaField/TextareaField";
import QuizPageBg from "assets/QuizPageBg.png";
import LeftIcon from "icons/LeftIcon";
import RightIcon from "icons/RightIcon";

import "./Quiz.scss"

const Quiz: React.FC = () => {
  const { state: { quizData, user }, dispatch } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const nextQuestionHandler = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setDisabled(true);
      if(currentIndex === quizData.length - 2) {
        setDisabled(false);
      }
    } else {
      if(!user) {
        navigate('auth');
      } else {
        navigate('/order-details');
      }
    }
  }

  const prevQuestionHandler = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const { options, id, inputName, selection, question } = quizData[currentIndex];

  const checkAnswer = (selection: number) => {
    setDisabled(false);
    dispatch({ type: ActionTypes.SELECT_QUIZ, payload: { quizId: id, selection } });
  }

  const handleTextInput = (val: string) => {
    dispatch({ type: ActionTypes.SELECT_QUIZ, payload: { quizId: id, selection: val } });
  }

  const nextAgeHandler = () => {
    dispatch({ type: ActionTypes.SELECT_QUIZ, payload: { quizId: id, selection: selection + 1 } });
  }

  const prevAgeHandler = () => {
    if (selection === 1) {
      return;
    }
    dispatch({ type: ActionTypes.SELECT_QUIZ, payload: { quizId: id, selection: selection - 1 } });
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
              arrayLength={quizData.length}
              currentDot={currentIndex}
            />
            <TextBlock className="app-quiz__content__question">
              {question}
            </TextBlock>
            <div className="app-quiz__content__options">
              <div className="app-quiz__content__options__children">
                {currentIndex !== 1 && currentIndex !== 5 ? (
                  options.map((option: string, idx: number) => (
                    <CheckBoxContainer
                      key={`${id}-${option}`}
                      className="app-quiz__content__options__children__option"
                      onClick={() => checkAnswer(idx)}
                      text={option}
                      name={inputName}
                      selected={selection === idx}
                    />
                  ))) : currentIndex === 1 ? (
                    <AgeSlider
                      nextAge={nextAgeHandler}
                      prevAge={prevAgeHandler}
                      selection={selection}
                      onClick={checkAnswer}
                    />
                  ) : (
                      <TextareaField
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
              <Button
                className="app-quiz__content__button__prev"
                disabled={currentIndex === 0}
                onClick={prevQuestionHandler}
              >
                <LeftIcon /> Հետ
                </Button>
              <Button
                className="app-quiz__content__button__next"
                disabled={disabled && selection === null && currentIndex !== quizData.length -1}
                onClick={nextQuestionHandler}
              >
                Առաջ <RightIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz;