import React, { useState } from 'react'

function UserInput() {
    const [UserInput,setUserInput]=useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 7,
        duration: 10
    });

    function handleChange(inputIdentifier,newValue){
        setUserInput((prevUserInput)=>{
            return{
                ...prevUserInput,
                [inputIdentifier]:newValue,
            }
        })
    }
  return (
    <section id='user-input'>
        <div className='input-group'>
            <p>
                <label>Initial Investment</label>
                <input type='number' required value={UserInput.initialInvestment} onChange={(e)=> handleChange('initialInvestment',e.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type='number' required value={UserInput.annualInvestment} onChange={(e)=> handleChange('annualInvestment',e.target.value)} />
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label>Expected Return</label>
                <input type='number' required value={UserInput.expectedReturn} onChange={(e)=> handleChange('expectedReturn',e.target.value)}  />
            </p>
            <p>
                <label>Duration</label>
                <input type='number' required value={UserInput.duration} onChange={(e)=> handleChange('duration',e.target.value)}  />
            </p>
        </div>
    </section>
  )
}

export default UserInput