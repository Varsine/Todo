import React from "react";

import "./ProgressBar.scss";

interface IProgressBarProps {
  arrayLength: number;
  currentDot: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ arrayLength, currentDot }) => {
  return (
    <div>
      {Array(arrayLength).fill(0).map((_, idx) => (
          <span key={idx} className={`app-dot ${currentDot === idx && "app-dot--active"}`}></span>)
      )}
    </div>
  )
}

export default ProgressBar;