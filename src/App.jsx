import React, { useEffect, useState, createContext } from 'react';
import Header from './components/Header';
import Information from './components/Information';
import TextBox from './components/TextBox';
export const AppContext = createContext();
const App = ({ children }) => {
  const[words,setWords]=useState(0);
  const[characters,setCharacters]=useState(0);
  const[sentences,setSentences]=useState(0);
  
  const[text,setText]=useState("")

  return (
    <AppContext.Provider value={{words,characters,sentences,text,setText,setCharacters,setSentences,setWords}}>
       {children}
       <Header></Header>
       <Information></Information>
       <TextBox></TextBox>
    </AppContext.Provider>
  )
}

export default App
