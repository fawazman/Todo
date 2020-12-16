import React, { useEffect, useState } from "react";
import Input from "../components/Input/Input";
import TodoList from "../components/TodoList/todoList";
import "./styles.css";
const ToDo = () => {
  let [taskList, setTaskList] = useState([]);
  let [count, setCount] = useState(0);
  let [edit, setEdit] = useState(false);
  let [editValue, setEditValue] = useState("");
  let [editId, setEditId] = useState(null);
  useEffect(() => {
    let tempCount = 0;
    taskList.forEach((item) => !item.completed && tempCount++);
    setCount(tempCount);
  }, [taskList]);
  const onAdd = (val) => {
    setTaskList([...taskList, val]);
  };
  const onEdit = (val) => {
    let tempTaskList = [...taskList];
    const index = tempTaskList?.findIndex((item) => item.id === val.id);
    tempTaskList[index].name = val.name;
    console.log(tempTaskList);
    setTaskList((taskList) => (taskList = tempTaskList));
    setEditValue("");
    setEditId(null);
    setEdit(false);
  };
  const editTask = (val) => {
    let tempTaskList = [...taskList];
    const index = tempTaskList?.findIndex((item) => item.id === val);
    setEditValue(index >= 0 ? tempTaskList[index].name : "");
    setEditId(val);
    setEdit(true);
    
  };
  const deleteTask = (val) => {
    taskList = taskList.filter((item) => item.id !== val);
    setTaskList(taskList);
  };
  const handleCheck = (val) => {
    let tempTaskList = [...taskList];
    const index = tempTaskList?.findIndex((item) => item.id === val);
    tempTaskList[index].completed = !tempTaskList[index].completed;
    console.log(tempTaskList);
    setTaskList((taskList) => (taskList = tempTaskList));
  };
  const cancelEdit = () => {
    setEditValue("");
    setEditId(null);
    setEdit(false);
  };
  return (
    <React.Fragment>
      <Input
        cancelEdit={cancelEdit}
        edit={edit}
        editId={editId}
        editValue={editValue}
        onEdit={onEdit}
        onAdd={onAdd}
      />
      {taskList.length > 0 && !edit && (
        <div className={"desc"}>{`Task List(${count} pending)`}</div>
      )}
      {!edit && (
        <TodoList
          editTask={editTask}
          deleteTask={deleteTask}
          taskList={taskList}
          handleCheck={handleCheck}
        />
      )}
    </React.Fragment>
  );
};
export default ToDo;
