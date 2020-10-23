import React from 'react';

import Button from 'components/Button/Button';
import LeftIcon from 'icons/LeftIcon';
import RightIcon from 'icons/RightIcon';

import "./AgeSlider.scss";

interface IAgeSliderProps {
    id: number;
    onClick: (x: number, y: number) => void;
    prevAge: () => void;
    nextAge: () => void;
    currentAge: number;
    selection: number | string | null;
    className?: string;
};

const AgeSlider: React.FC<IAgeSliderProps> = ({ id,
    selection,
    onClick,
    prevAge,
    nextAge,
    currentAge,
    className = "",
}) => {
    const currentArray = [currentAge - 2, currentAge - 1, currentAge, currentAge + 1, currentAge + 2];

    return (
        <div className={`age-slider ${className}`}>
            <Button className="age-slider__btn" onClick={prevAge}><LeftIcon /></Button>
            {currentArray.map((age) => {
                return (
                    <span
                        onClick={() => onClick(id, Number(age))}
                        className={`age-slider__item ${selection === Number(age) ? "age-slider__item--selected" : ""}`}
                        key={age}
                    >
                        {age}
                    </span>
                )
            })
            }
            <Button className="age-slider__btn" onClick={nextAge}><RightIcon /></Button>
        </div>
    );
}

export default AgeSlider;