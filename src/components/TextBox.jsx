import React, { useContext } from "react";
import "../style/header.css";
import { AppContext } from "../App";

const TextBox = () => {
  const { text, words, setText, setWords, characters, setCharacters,sentences,setSentences } =
    useContext(AppContext);

  function handleChange(event) {
    console.log(event.target.value);

    setText(event.target.value);

    const input = event.target.value;

    function wordsLen(str) {
      const array = str.trim().split(/\s+/);
      setWords( array.length);
    }
    function countSentences(text) {
        // Split the text into sentences based on common sentence terminators.
        const sentences = text.split(/[.!?]+/);
    
        // Filter out empty strings (caused by consecutive terminators).
        const filteredSentences = sentences.filter(sentence => sentence.trim() !== '');
    
        // Return the count of sentences.
        return filteredSentences.length;
    }
    wordsLen(input);
    setCharacters(input.length);
    setSentences(countSentences(input))
  }
  return (
    <div>
      <div className="w3-card-4 w3-margin w3-white">
        <div className="w3-container">
          <h3>
            <b>Enter Your Text Here</b>
          </h3>
        </div>

        <div className="w3-container">
          <textarea onChange={handleChange}></textarea>
          <div className="w3-row"></div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
