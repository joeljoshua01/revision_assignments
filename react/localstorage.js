import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const text = JSON.parse(localStorage.getItem("textContent"));
    if (text) {
      setContent(text);
    }
  }, []);

  function handleChange(e) {
    let text = e.target.value;
    setContent(text);
    localStorage.setItem("textContent", JSON.stringify(text));
  }

  return (
    <div className="App">
      <textarea value={content} onChange={handleChange} />
    </div>
  );
}
