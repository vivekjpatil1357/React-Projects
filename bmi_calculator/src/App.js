import React, { useMemo, useRef, useState } from 'react';
import './App.css';
import x from './logo.png'
import bg from './bg.jpeg'
const App = () => {
  const [weight, setWeight] = useState(30)
  const [height, setHeight] = useState(100)
  const bmi = useMemo(() => {
    return ((weight / ((height / 100) ** 2)).toFixed(2))
  }, [height, weight])
  const bmiView = useRef('red')
  const resultRef = useRef(null)
  const handleWeightChange = (e) => {
    setWeight(e.target.value)
    setBmiView()
  }
  const handleHeightChange = (e) => {
    setHeight(e.target.value)
    setBmiView()
  }
  const setBmiView = () => {
    resultRef.current.style.color = "black"
    bmiView.current.style.color = "black"
    if (parseFloat(bmiView.current.innerText) < 18.5) {
      bmiView.current.style.background = "#ffe396"
      resultRef.current.style.background = "#ffe396"
      resultRef.current.innerText = 'Malnourished'
    }
    else if (parseFloat(bmiView.current.innerText) < 24.9) {
      bmiView.current.style.background = "#4df244"
      resultRef.current.style.background = "#4df244"

      resultRef.current.innerText = 'Healthy'
    }
    else if (parseFloat(bmiView.current.innerText) < 29.9) {
      bmiView.current.style.background = "#f1f139"
      resultRef.current.style.background = "#f1f139"
      resultRef.current.innerText = 'Overweight'
    }
    else {
      bmiView.current.style.background = "fc5757"
      resultRef.current.style.background = "#fc5757"
      resultRef.current.innerText = 'obese'
    }
  }
  return (
    <main className='main' >
      <img src={x} className='logo'></img>
      <h1 className='heading'>BMI Calculator</h1>
      <div className='inputs'>
        <h1 ref={resultRef} className='result'>Good to go</h1>
        <p className='weight-display'>Weight: {weight}Kg</p>
        <input className='input-weight' type='range' min={'30'} max={'140'} defaultValue={'0'} step={'1'} onInput={(e) => {
          handleWeightChange(e)
        }}></input>
        <p className='height-display'>height:{height} Cm</p>
        <input className='input-weight' type='range' min={'100'} max={'250'} defaultValue={'0'} onInput={(e) => {
          handleHeightChange(e)
        }}></input>
        <div className='bmi-area'>
          <p className='bmi-display'>Your BMI is :</p>
          <div ref={bmiView} className='bmi'>{bmi}</div>
        </div>
      </div>
    </main>
  )
}
export default App