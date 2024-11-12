import { useState } from "react";
import css from "./InputTask.module.css";

export function InputTask({ onSetNewTask }) {
  const [inputValue, setInputValue] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();

    const task = inputValue;

    onSetNewTask(task);
    setInputValue("");
  }
  return (
    <>
      <form className={css.form} onSubmit={onSubmitHandler}>
        <input
          type="text"
          className={css.input}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit" className={css.button}>
          Dodaj
        </button>
      </form>
    </>
  );
}
