import styles from "./MaxDisplay.module.scss";

const MaxDisplay = (props) => {
  const selectionHandler = (event) => {
    props.setMaxResults(event.target.value);
  };
  return (
    <div className={styles.MaxDisplay}>
      <label className={styles.MaxDisplay_label} htmlFor="max-display">
        Max Results:
      </label>
      <select onChange={selectionHandler} id="max-display">
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
      </select>
    </div>
  );
};

export default MaxDisplay;
