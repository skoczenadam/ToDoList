import css from "./TasksCounter.module.css";

export function TasksCounter({ onTaskCounter }) {
  return (
    <>
      <h2 className={css.h2}>Ilość zadań: {onTaskCounter}</h2>
    </>
  );
}
