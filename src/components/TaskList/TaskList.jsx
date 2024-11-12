import css from "./TaskList.module.css";

export function TaskList({ onTask, onDoneRemove, onTaskRemove }) {
  return (
    <>
      <ul className={css.taskList}>
        {onTask.map((task) => (
          <li key={task.ID} className={css.task}>
            <div className={css.aboveline}></div>
            <div className={css.listContainer}>
              <p
                className={`${css.taskName} ${
                  task.isDone ? css.done : ""
                }`}
              >
                {task.name}
              </p>
              {!task.isDone && (
                <button
                  className={css.button}
                  onClick={() => onDoneRemove(task.ID)}
                >
                  Zrobione
                </button>
              )}
              <button
                className={css.button}
                onClick={() => onTaskRemove(task.ID)}
              >
                Usuń
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
