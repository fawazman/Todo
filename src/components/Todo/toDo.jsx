import React from "react";
import Button from "../Button/button";
import CheckBox from "../Checkbox/checkBox";
// import "./styles.css";
const ToDO = (props) => {
  const { listItem, editTask, deleteTask, handleCheck } = props;
  return (
    <React.Fragment key={listItem.id}>
      <div>
        <h4>
          {listItem.name}
          <CheckBox
            id={listItem.id}
            completed={listItem.completed}
            handleCheck={handleCheck}
          />
        </h4>

        <Button
          handleClick={() => editTask(listItem.id)}
          buttonText={`Edit ${listItem.name}`}
        />
        <Button
          handleClick={() => deleteTask(listItem.id)}
          buttonText={`Delete ${listItem.name}`}
        />
      </div>
    </React.Fragment>
  );
};

export default ToDO;
