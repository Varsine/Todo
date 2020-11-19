import React, { useContext } from 'react';

import Button from 'components/Button/Button';
import LeftIcon from 'icons/LeftIcon';
import RightIcon from 'icons/RightIcon';
import { AppContext } from 'app-context/appContext';
import { DeviceTypes } from 'app-context/contextTypes';

import "./AgeSlider.scss";

interface IAgeSliderProps {
    onClick: (newSelection: number) => void;
    prevAge: () => void;
    nextAge: () => void;
    selection: number;
    className?: string;
};

const AgeSlider: React.FC<IAgeSliderProps> = ({
    selection,
    onClick,
    prevAge,
    nextAge,
    className = "",
}) => {
    const { state: { device } } = useContext(AppContext);
    const currentArray =
        device !== DeviceTypes.mobile ? [selection - 2, selection - 1, selection, selection + 1, selection + 2]
            : [selection - 1, selection, selection + 1];

    return (
        <div className={`age-slider ${className}`}>
            <Button className="age-slider__btn" onClick={prevAge}><LeftIcon /></Button>
            {currentArray.map((age) => {
                return (
                    <span
                        onClick={() => onClick(age)}
                        className={`age-slider__item ${selection === age ? "age-slider__item--selected" : ""}`}
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