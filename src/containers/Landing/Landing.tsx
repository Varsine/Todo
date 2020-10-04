import React, { useState } from "react"

import InputField from "components/InputField/InputField"
import ProfileHeaderIcon from "icons/ProfileHeaderIcon";

import "./Landing.scss"

interface ILandingProps { }

const Landing: React.FC<ILandingProps> = () => {
  const [value, setValue] = useState('');

  const onChange = (newValue: string) => {
    setValue(newValue);
  }

  return (
    <div>
      <InputField
        Icon={ProfileHeaderIcon}
        type='password'
        value={value}
        onChange={onChange}
        placeholder="Enter Your Name..."
      />
    </div>
  )
}

export default Landing
