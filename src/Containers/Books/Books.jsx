import Book from "../../Components/Book";
import styles from "./Books.module.scss";
import { useState, useEffect } from "react";
import noImage from "../../assets/images/no-image.jpeg";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState({
    error: true,
    errorMessage: "",
  });

  const getBooks = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      //Data.items can appear as undefined or as 0 value when search term does not trieve results. In these cases an error message should display to user.
      if (data.items) {
        setError({ error: false, errorMessage: "" });
        setBooks(
          data.items.map((item) => {
            //In case there is no title property a value of No title will display
            let title = "No Title";
            if (item.volumeInfo.hasOwnProperty("title")) {
              title = item.volumeInfo.title;
            }
            //If no author attribute make authors value Author unknown
            let authors = ["Author Unknown"];
            if (item.volumeInfo.hasOwnProperty("authors")) {
              authors = item.volumeInfo.authors;
            }
            //If no image add link to default image
            let imageLink = noImage;
            if (item.volumeInfo.hasOwnProperty("imageLinks")) {
              imageLink = item.volumeInfo.imageLinks.thumbnail;
            }
            //If no description add empty string
            let description = "";
            if (item.volumeInfo.hasOwnProperty("description")) {
              description = item.volumeInfo.description;
            }
            return {
              title: title,
              authors: authors,
              imageLink: imageLink,
              description: description,
            };
          })
        );
      } else {
        setError({
          error: true,
          errorMessage:
            "Sorry, no books found for that search term. Please try again.",
        });
      }
    } catch (error) {
      setError({
        error: true,
        errorMessage:
          "Sorry, theres been a problem trying to connect to the Google Books API. Please try again. ",
      });
    }
  };

  //show new data when search term changes or if user changes max results to be displayed/
  useEffect(() => {
    const url =
      `https://www.googleapis.com/books/v1/volumes?q=${props.searchTerm}&maxResults=${props.maxResults}`
        .split(" ")
        .join("+");
    getBooks(url);
  }, [props.searchTerm, props.maxResults]);

  if (!error.error) {
    return (
      <div className={styles.Books}>
        {books.map((book, index) => {
          return (
            <Book
              key={index}
              title={book.title}
              authors={book.authors}
              description={book.description}
              imageLink={book.imageLink}
            />
          );
        })}
      </div>
    );
  } else {
    return <h3>{error.errorMessage}</h3>;
  }
};

export default Books;
