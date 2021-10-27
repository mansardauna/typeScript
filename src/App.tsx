import React from 'react'
import "./index.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./PrimaryButton"
import PrimaryButton from './PrimaryButton';


const App = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col shadow-xl rounded-xl mt-10 items-center justify-center text-white uppercase font-medium" >
      timer
      < CircularProgressbar value={60} text={`60%`
      } />
      < div >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mb-2 uppercase rounded">Start
        </button>
        <button className="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 mt-5 mb-2 uppercase rounded">Stop
        </button>
      </div >
    </div >
  )
}

export default App
