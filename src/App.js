import React, {useState} from "react";
import './App.css';

function App() {
  const [word, setWord] = useState("");
  type rhyme = {
    word:string;
    numSyllables:1;
    score:Number;
  }
  const [rhymes, setRhymes] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.datamuse.com/words?rel_rhy=fast`)
    .then((Response)=> Response.json())
    .then(setRhyme);

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
    </div>
  );
}

export default App;
