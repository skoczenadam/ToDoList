import css from "./NewTask.module.css";
import { IoAddCircle } from "react-icons/io5";

export function NewTask({ onClick }) {
  return (
    <>
      <IoAddCircle className={css.button} onClick={onClick} />
    </>
  );
}
