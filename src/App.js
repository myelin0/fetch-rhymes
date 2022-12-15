import React, {useState} from "react";
import './App.css';

const BASE_URL = `https://api.datamuse.com`

function App() {
  const [word, setWord] = useState("");
  const [rhyme, setRhyme] = useState([]);

  const fetchRhymes = (word) => {
fetch(`${BASE_URL}/words?rel_rhy=${word}`)
    .then((Response)=> Response.json())
    .then(setRhyme);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchRhymes(word);

  }

  return (
    <div className = 'mx-auto p6'>
      <form onSubmit={handleFormSubmit}>
        <label className="block pb-8 text-contrastColor text-center underline capitalize hover:uppercase" htmlFor='word-input'>
        find a rhyme for your word

        </label>
        <input type ='text'
        id="word-input"
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder = "Enter word here"
        value={word}
        onChange={(e)=> setWord(e.target.value)}
        
        ></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded">Submit</button>
      </form>
      <ul className="text-center">{rhyme.map((e)=><li
      key = {rhyme.word}c               
      >{e.word}</li>)}
      </ul>
    </div>
  );
}

export default App;
