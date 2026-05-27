import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/api/message")
      .then((res) => {
        setMessage(res.data.message);
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Could not reach backend at /api/message");
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend</h1>
      <h2>{message || "Loading message..."}</h2>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
