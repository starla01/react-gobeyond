import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//COmponents
import Header from "./components/Header";
import ResultList from "./components/ResultList";

function App() {
  const [word, setWord] = useState("");
  return (
    <div className="App">
      <Header setWord={setWord} />
      <ResultList word={word} />
    </div>
  );
}

export default App;
