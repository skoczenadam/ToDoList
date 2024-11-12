import css from "./InputTask.module.css";

export function InputTask({ onSubmit, onSetNewTask, onNewTask }) {
  return (
    <>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          type="text"
          className={css.input}
          value={onNewTask}
          onChange={(e) => onSetNewTask(e.target.value)}
        ></input>
        <button type="submit" className={css.button}>
          Dodaj
        </button>
      </form>
    </>
  );
}
