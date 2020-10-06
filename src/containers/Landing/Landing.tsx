import React, { useState } from "react";

import InputField from "components/InputField/InputField";
import ProfileHeaderIcon from "icons/ProfileHeaderIcon";

import "./Landing.scss"

interface ILandingProps { }

const Landing: React.FC<ILandingProps> = () => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (val: string) => {
    if(val.length < 4) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    setValue(val);
  }

  return (
    <div className="app-landing">
      <InputField
        onChange={onChangeHandler}
        value={value}
        Icon={ProfileHeaderIcon}
        name={'Profile Name input'}
        placeholder={'Enter your Name...'}
        type={'password'}
        // hasError={hasError}
        loading={false}
      />
    </div>
  )
}

export default Landing;
