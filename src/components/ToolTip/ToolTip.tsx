import React, { ReactElement, useState, PointerEvent } from "react";
import "../styles/main.scss";

type PropsType = {
  children: ReactElement;
  text: string;
};

export const ToolTip: React.FC<PropsType> = ({ children, text }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  const handlePointerEvent = () => {
    setShowToolTip(!showToolTip);
  };

  return (
    <div
      className={showToolTip ? "container" : "container bounce-1"}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={handlePointerEvent}
    >
      {children}
      {showToolTip && <div className="tooltip">{text}</div>}
    </div>
  );
};
