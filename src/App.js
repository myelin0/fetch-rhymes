import React, {useState} from "react";
import './App.css';

const BASE_URL = `https://api.datamuse.com`

function App() {
  const [word, setWord] = useState("");
  const [rhyme, setRhyme] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/words?rel_rhy=${word}`)
    .then((Response)=> Response.json())
    .then(setRhyme);
    console.log(setRhyme)

  }

  return (
    <div className="App">
      Hello World!
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='word-input'>
        Your word

        </label>
        <input id="word-input"
        value={word}
        onChange={(e)=> setWord(e.target.value)}
        
        ></input>
        <button>Submit</button>
      </form>
      <ul key = {"index"}>{rhyme.map((e)=><li>{e.word}</li>)}</ul>
    </div>
  );
}

export default App;
