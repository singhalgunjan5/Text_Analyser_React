import React, { useContext } from 'react';
import "../style/header.css";
import { AppContext } from '../App';
const Information = () => {
    const {words,characters,sentences} = useContext(AppContext)
  return (
    <>
      <div className="w3-card w3-margin">
        {/* <div className="w3-container w3-padding">
          <h4>Tags{text}</h4>
        </div> */}
        <div className="w3-container w3-white">
          <p>
          
            <span className="w3-tag w3-light-grey w3-large w3-margin-bottom">Words &nbsp; {words}</span>{" "}
            &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
            <span className="w3-tag w3-light-grey w3-large w3-margin-bottom">
              Characters  &nbsp; {characters}
            </span>{" "}
            &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
            <span className="w3-tag w3-light-grey w3-large w3-margin-bottom">
              Sentences  &nbsp; {sentences}
            </span>
            &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
           
            
          </p>
        </div>
      </div>
    </>
  );
};

export default Information;
