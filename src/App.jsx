import styles from "./App.module.scss";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Books from "./Containers/Books/Books";
import MaxDisplay from "./Components/MaxDisplay";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxResults, setMaxResults] = useState(10);

  return (
    <div className={styles.App}>
      <Header />
      <Form setSearchTerm={setSearchTerm} />
      <MaxDisplay setMaxResults={setMaxResults} />
      {!(searchTerm === "") ? (
        <Books searchTerm={searchTerm} maxResults={maxResults} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
