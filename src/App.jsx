import styles from "./App.module.scss";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Books from "./Containers/Books/Books";
import MaxDisplay from "./Components/MaxDisplay";
import { useState } from "react";

// Could add some placeholder books when no search as been typed rather than have blanked page or have User Feedback message saying that no search has been entered yet

// Styling of MaxDisplay to be updated, inline with Search Bar

// Change back ground color to something a little bit less white (change brightness maybe?) https://webaim.org/articles/contrast/
// Same goes with white text color against cream card background color

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
