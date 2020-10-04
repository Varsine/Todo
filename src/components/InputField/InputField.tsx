// TODO handle error states and fieldset caption

import React from "react";

import VisibleIcon from "icons/VisibleIcon";

import "./InputField.scss";

enum InputTypes {
  text = 'text',
  password = 'password',
  email = 'email'
}

type InputType = 'text' | 'password' | 'email';

interface IInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  Icon?: React.FC;
  loading?: boolean,
  placeholder?: string;
  type?: InputType;
  name?: string;
  className?: string;
}

const InputField: React.FC<IInputFieldProps> = ({
  value,
  onChange,
  Icon = null,
  loading = false,
  placeholder = '',
  type = InputTypes.text,
  name = '',
  className = ''
}) => {
  const isPassword: boolean = type === InputTypes.password;
  return (
    <div className="app-input-container">
      {Icon && (
        <div className="app-input-container__left-icon">
          <Icon />
        </div>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChange(e.target.value); }}
        disabled={loading}
        placeholder={placeholder}
        className={`app-input-container__input ${className}`}
      />
      {isPassword && (
        <div className="app-input-container__right-icon">
          <VisibleIcon />
        </div>
      )}
    </div>
  );
}

export default InputField;
