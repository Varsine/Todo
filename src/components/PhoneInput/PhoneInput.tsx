import React from 'react';

import PhoneIcon from 'icons/PhoneIcon';

import "./PhoneInput.scss";

interface IPhoneInputProps {
    value: string;
    onChange: (val: string) => void;
};

const PhoneInput: React.FC<IPhoneInputProps> = ({
    value,
    onChange,
}) => {
    const onChangeHandler = (val: string) => {
        const lastChar = val[val.length - 1];
        if (val.length === 12) {
            return;
        }
        const valWithoutLastChar = val.slice(0, val.length - 1);
        switch (val.length) {
            case 3:
            case 6:
            case 9:
                if (lastChar === ' ' || lastChar === '-') {
                    onChange(valWithoutLastChar);
                } else {
                    onChange(valWithoutLastChar + (val.length === 3 ? ' ' : '-') + lastChar);
                }
                break;
            default:
                onChange(val);
        }
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // prevents onChange event if the key is not a number
        if (isNaN(parseInt(e.key, 10)) && e.key.length === 1) {
            e.preventDefault()
        }
        if (e.key === 'Backspace') {
            e.preventDefault();
            onChangeHandler(value.slice(0, value.length - 1));
        }
    }

    return (
        <>
            <label className="app-phone-heading">Հեռախոսահամար</label>
            <div className="app-input-container">
                <span className="app-input-container__icon"><PhoneIcon /></span>
                <input
                    value={value}
                    onChange={(e) => { onChangeHandler(e.target.value) }}
                    type="tel"
                    className="app-input-container__input app-input-container__phone-input"
                    placeholder="xx xx-xx-xx"
                    onKeyDown={keyDownHandler}
                    onPaste={(e) => { e.preventDefault() }}
                />
                <span className="app-input-container__prefix">+374</span>
                {value.length > 0 &&
                    <span
                        className="app-input-container__postfix"
                        style={{ color: value.length < 11 ? 'red' : 'green' }}
                    >
                        {value.length === 11 ? '✔' : '✕'}
                    </span>}
            </div>
        </>
    );
}

export default PhoneInput;