import React, { useState, useContext } from 'react';

import { QuizContext } from "App";
import Button from 'components/Button/Button';
import LeftIcon from 'icons/LeftIcon';
import RightIcon from 'icons/RightIcon';

import "./AgeSlider.scss";

interface IAgeSliderProps {};

const AgeSlider: React.FC<IAgeSliderProps> = () => {
    const quizContext = useContext(QuizContext);
    const [currentIdx, setCurrentIdx] = useState(24)
    const [ageOne, setAgeOne] = useState(currentIdx - 2)
    const [ageTwo, setAgeTwo] = useState(currentIdx - 1)
    const [ageThree, setAgeThree] = useState(currentIdx)
    const [ageFour, setAgeFour] = useState(currentIdx + 1)
    const [ageFive, setAgeFive] = useState(currentIdx + 2)
    const defaultShowAge = [ageOne, ageTwo, ageThree, ageFour, ageFive]

    const clickNextAge = () => {
        if (currentIdx < 44) {
            setCurrentIdx(currentIdx + 1)
            setAgeOne(currentIdx - 2)
            setAgeTwo(currentIdx - 1)
            setAgeThree(currentIdx)
            setAgeFour(currentIdx + 1)
            setAgeFive(currentIdx + 2)
        }
    }
    const clickPrevAge = () => {
        if (currentIdx > 16) {
            setCurrentIdx(currentIdx - 1)
            setAgeOne(currentIdx - 2)
            setAgeTwo(currentIdx - 1)
            setAgeThree(currentIdx)
            setAgeFour(currentIdx + 1)
            setAgeFive(currentIdx + 2)
        }
    }
    const MobileTouchMoveAge = () => { }

    const checkAnswer = (quizId: number, selection: number) => {
        quizContext.selectQuiz(quizId, selection);
    }
    return (
        <div className="age-slider" onTouchMove={MobileTouchMoveAge}>
            {window.innerWidth > 1024 && <Button className="age-slider__btn" onClick={clickPrevAge}><LeftIcon /></Button>}
            <div className="age-slider__array">
                {defaultShowAge.map((el, idx) => {
                    return <span onClick={() => checkAnswer(1, currentIdx)}
                        className={`age-slider__array__item  ${idx === 2 ? "age-slider__array__item--selected" : ""}`}>{el}</span>
                })
                }
            </div>
            {window.innerWidth > 1024 && <Button className="age-slider__btn" onClick={clickNextAge}><RightIcon /></Button>}
        </div>
    );
}

export default AgeSlider;