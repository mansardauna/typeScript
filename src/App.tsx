import React from 'react'
import "./App.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const App = () => {
  return (
    <div className='container'>
      timer
      <CircularProgressbar value={60} text={`60%`} />
    </div>
  )
}

export default App
