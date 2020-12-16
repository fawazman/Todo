import React, { useEffect, useState } from "react";
import ToDo from "../Todo/toDo";
// import "./styles.css";
const Button = (props) => {
  const { taskList, deleteTask, editTask, handleCheck } = props;

  return (
    <React.Fragment>
      <ol>
        {taskList?.map((item, index) => (
          <li key={index}>
            <ToDo
              handleCheck={handleCheck}
              deleteTask={deleteTask}
              editTask={editTask}
              listItem={item}
            ></ToDo>
          </li>
        ))}
      </ol>
    </React.Fragment>
  );
};

export default Button;
