import styles from "./Book.module.scss";

const Book = (props) => {
  const maxTitleChar = 40;
  const maxDescChar = 200;
  return (
    <div className={styles.Book}>
      <img className={styles.Book_image} src={props.imageLink} />
      <h2>
        {props.title.length > maxTitleChar
          ? `${props.title.slice(0, maxTitleChar)}...`
          : props.title}
      </h2>
      <h3>{props.authors.join(", ")}</h3>
      <p>
        {props.description.length > maxDescChar
          ? `${props.description.slice(0, maxDescChar)}...`
          : props.description}
      </p>
    </div>
  );
};

export default Book;
