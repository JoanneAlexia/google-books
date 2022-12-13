import styles from "./Header.module.scss";

// If a component does not have any proprietary logic and does not rely on props to conditional render some data to the DOM it most likely does not need to be a component ...

const Header = () => {
    return (
        <div className={styles.Header}>
            <h1>Find Me A Book...</h1>
        </div>
    );
};

export default Header;
