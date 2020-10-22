import React from "react"

import "./ProgressBar.scss"

interface IProgressBarProps {
  dotsArray: Array<any>;
  currentDot: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({dotsArray, currentDot}) => {
  return (
    <div>
      {dotsArray.map((data, index) => {
        return (
          <span
            className={`app-dot ${currentDot === index && "app-dot--active"}`}></span>
        )
      })}
    </div>
  )
}

export default ProgressBar;