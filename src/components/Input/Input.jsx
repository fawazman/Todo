import React, { useEffect, useState } from "react";
import Button from "../Button/button";
import "./styles.css";
const Input = (props) => {
  let { onAdd, edit, editId, editValue, onEdit,cancelEdit } = props;
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    if (edit) {
      setInputVal(editValue);
    }
  }, [edit]);
  const addToDo = () => {
    if (inputVal) {
      onAdd({
        id: Date.now(),
        name: inputVal,
        completed: false,
      });
      setInputVal("");
    } else {
      alert("empty");
    }
  };
  const editToDo = () => {
    if (inputVal) {
      onEdit({
        id: editId,
        name: inputVal,
      });
      setInputVal("");
    } else {
      alert("empty");
    }
  };
  return (
    <div>
      <div>
        <label>Create Task</label>
      </div>
      <div>
        <input
          size={"large"}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Button
          buttonText={edit ? "Update" : "Add"}
          className={"buttonStyles"}
          handleClick={edit ? editToDo : addToDo}
        />
        {edit && (
          <Button
            buttonText={"Cancel"}
            className={"buttonStyles"}
            handleClick={cancelEdit}
          />
        )}
      </div>
    </div>
  );
};
export default Input;
