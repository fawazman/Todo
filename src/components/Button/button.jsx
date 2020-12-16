import React from "react";
import "./styles.css";
const Button = (props) => {
  const { buttonText, handleClick } = props;
  return (
    <React.Fragment>
      <button className={"buttonStyles"} onClick={() => handleClick()}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default Button;
