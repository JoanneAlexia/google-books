import styles from "./MaxDisplay.module.scss";

// You can catch setMaxResults directly rather than catch the props object.
// If you have a lot of props passed down, the props object can be useful as it will make it very brief to catch all you props and you only have to access them with dot notation when you want to use them

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
