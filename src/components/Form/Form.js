import React, { useEffect } from 'react'
import { useState } from 'react'
import { BarChart } from '../Chart/BarChart'
import './Form.css'

const initialState = {
  easyval: 0,
  mediumval: 0, 
  hardval: 0,
  view: 0,
}
export const Form = () => {

  const [formData, setformData] = useState(initialState);
  // const [showChildComp, setShowChildComp] = useState(false);
  // const onBtnClick = e => {
  //   e.preventDefault()
  //   setShowChildComp(prevState => !prevState)
  // }
  // let cnt = 0;
  return (
    <>
    <div className='container'>
      <form>
        <label>Easy</label>
        <input 
          type="number"
          max={100}
          min={0}
          value = {formData.easyval}
          onChange = {(e) => setformData({...formData, easyval: e.target.value, view: 1})}
          required
        />
        <label>Medium</label>
        <input 
          type="number"
          max={100}
          min={0}
          value = {formData.mediumval}
          onChange = {(e) => setformData({...formData, mediumval: e.target.value, view: 1})}
          required
        />
        <label>Hard</label>
        <input 
          type="number"
          max={100}
          min={0}
          value = {formData.hardval}
          onChange = {(e) => setformData({...formData, hardval: e.target.value, view: 1})}
          required
        />
      </form>
      {/* <button onClick={onBtnClick}>Click here</button>
      {showChildComp && <BarChart {...formData} /> } */}
      <button onClick={(e) => {
        e.preventDefault();
        setformData({...formData, view: 0})}}>Refresh</button>
      {(formData.view === 0) &&  <BarChart {...formData}/>} 
    </div>
    </>
  )
}
