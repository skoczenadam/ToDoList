import { useState } from "react";
import { InputTask } from "../InputTask/InputTask";
import { NewTask } from "../NewTask/NewTask";
import { TasksCounter } from "../TasksCounter/TasksCounter";
import { TaskList } from "../TaskList/TaskList";
import css from "./App.module.css";

const taskList = [];

function App() {
  const [tasks, setTasks] = useState(taskList);
  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  console.log(tasks);

  function submitHandler(e) {
    e.preventDefault();
    if (newTask === "") return alert("Nic nie wpisano!");
    setTasks((prevTasks) => [
      ...prevTasks,
      { name: newTask, ID: prevTasks.length + 1, isDone: false },
    ]);
    setNewTask("");
    setNewTaskOpen(false);
  }

  function removeDone(ID) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.ID === ID ? { ...task, isDone: true } : task
      )
    );
  }

  function removeTask(ID) {
    setTasks((prevTasks) => prevTasks.filter((tasks) => tasks.ID !== ID));
  }

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Do zrobienia</h1>
        <TasksCounter onTaskCounter={tasks.length} />
        {newTaskOpen ? (
          <InputTask
            onSubmit={submitHandler}
            onSetNewTask={setNewTask}
            onNewTask={newTask}
          />
        ) : (
          <NewTask onClick={() => setNewTaskOpen(true)} />
        )}
        <TaskList
          onTask={tasks}
          onDoneRemove={removeDone}
          onTaskRemove={removeTask}
        />
      </div>
    </>
  );
}

export default App;
