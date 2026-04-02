import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>New {window.innerWidth <= 768 ? "Mobile Version" : "Desktop Version"}</h1>
        <p>{message || "Loading message..."}</p>
      </header>
    </div>
  );
}

export default App;