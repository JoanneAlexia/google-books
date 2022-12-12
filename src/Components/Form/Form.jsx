import styles from "./Form.module.scss";
import { useEffect } from "react";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearchTerm(event.target.searchTerm.value);
  };

  return (
    <div className={styles.Form}>
      <form onSubmit={handleSubmit}>
        <input className={styles.Form_input} name="searchTerm" type="text" />
        <button className={styles.Form_btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
