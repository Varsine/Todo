import React from 'react';

import Button from 'components/Button/Button';
import LeftIcon from 'icons/LeftIcon';
import RightIcon from 'icons/RightIcon';

import "./AgeSlider.scss";

interface IAgeSliderProps {
    className?: string;
    onClick: (x:number, y:number) => void;
    prevAge: () => void;
    nextAge: () => void;
    ageArray: Array<string>;
    currentAge: number;
    selection: number | null;
    id: number;
};

const AgeSlider: React.FC<IAgeSliderProps> = ({ id, selection, className = "", onClick, ageArray, prevAge, nextAge, currentAge }) => {

    return (
        <div className={`age-slider ${className}`}>
            <Button className="age-slider__btn" onClick={prevAge}><LeftIcon /></Button>
            {ageArray.slice(currentAge - 2, currentAge + 2).map((age, idx) => {
                console.log(age)
                return <span onClick={() => onClick(id, Number(age))} className={`age-slider__item ${selection === Number(age) ? "age-slider__item--selected" : ""}`}>{age}</span>
            })
            }
            <Button className="age-slider__btn" onClick={nextAge}><RightIcon /></Button>
        </div>
    );
}

export default AgeSlider;