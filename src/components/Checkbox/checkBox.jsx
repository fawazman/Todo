import React from "react";

// import "./styles.css";
const CheckBox = (props) => {
  let { id, completed, handleCheck } = props;
  return (
    <React.Fragment>
      <input
        onChange={() => handleCheck(id)}
        type="checkbox"
        checked={completed}
      />
    </React.Fragment>
  );
};

export default CheckBox;
