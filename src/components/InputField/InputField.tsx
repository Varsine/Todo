import React, { useState } from "react";

import VisibleIcon from "icons/VisibleIcon";
import NonVisibleIcon from "icons/NonVisibleIcon";

import "./InputField.scss";

enum InputComponentTypes {
  text = 'text',
  password = 'password',
  email = 'email',
  tel = 'number'
}

type InputType = 'text' | 'password' | 'email' | 'number';

interface IInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  Icon?: React.FC;
  loading?: boolean,
  placeholder?: string;
  type?: InputType;
  name?: string;
  className?: string;
  hasError?: boolean;
}

const InputField: React.FC<IInputFieldProps> = ({
  value,
  onChange,
  Icon = null,
  loading = false,
  placeholder = '',
  type = InputComponentTypes.text,
  name = '',
  className = '',
  hasError = false,
}) => {
  const isPassword: boolean = type === InputComponentTypes.password;
  const [isVisible, setVisible] = useState(!isPassword);

  const hasErrorClass = hasError ? ' app-input-container__input--error' : '';
  const IconClass = Icon ? ' app-input-container__input--left-padding' : '';
  const VisibleIconClass = isPassword ? ' app-input-container__input--right-padding' : '';
  const inputClassName = `app-input-container__input ${className}${hasErrorClass}${IconClass}${VisibleIconClass}`;

  return (
    <div className={`app-input-container`}>
      {Icon && (
        <div className="app-input-container__left-icon">
          <Icon />
        </div>
      )}
      <input
        name={name}
        type={isVisible ? 'text' : type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChange(e.target.value); }}
        disabled={loading}
        placeholder={placeholder}
        className={inputClassName}
      />
      {isPassword && (
        <div className="app-input-container__right-icon" >
          <div className="app-input-container__right-icon__inner-container" onClick={() => { setVisible(!isVisible); }}>
            {isVisible ? <VisibleIcon /> : <NonVisibleIcon />}
          </div>
        </div>
      )}
    </div>
  );
}

export default InputField;