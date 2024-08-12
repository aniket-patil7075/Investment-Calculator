import React, { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Results from './component/Results'
import UserInput from './component/UserInput'

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10
});

function handleChange(inputIdentifier,newValue){
    setUserInput((prevUserInput)=>{
        return{
            ...prevUserInput,
            [inputIdentifier]:+newValue,
        }
    })
}

  return (
    <>
      <Header/>
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  )
}

export default App
