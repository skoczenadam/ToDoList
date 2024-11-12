import { useState } from "react";
import { InputTask } from "../InputTask/InputTask";
import { NewTask } from "../NewTask/NewTask";
import { TasksCounter } from "../TasksCounter/TasksCounter";
import { TaskList } from "../TaskList/TaskList";
import css from "./App.module.css";
import nextId from "react-id-generator";

const taskList = [];

function App() {
  const [tasks, setTasks] = useState(taskList);
  const [newTaskOpen, setNewTaskOpen] = useState(false);

  console.log(tasks);

  function submitHandler(task) {
    if (task === "") return alert("Nic nie wpisano!");
    setTasks((prevTasks) => [
      ...prevTasks,
      { name: task, ID: nextId(), isDone: false },
    ]);

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
          <InputTask onSetNewTask={submitHandler} />
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
