import React from 'react'
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import SlctOpcheckboxes from './ui/SlctOpcheckboxes';
import Copytoclipboard from './ui/Copytoclipboard';
import Genaeratepassword from './ui/Genaeratepassword';
function App() {
    const [password,setPassword]=useState("");
    const [passwordLength,setPasswordLength]=useState('');
    const [includeUpper,setIncludeUpper]=useState(false);
    const [includeLower,setIncludeLower]=useState(false);
    const[number,setNumber]=useState(false)
    const [includeSymbol,setIncludeSymbol]=useState(false);
  
  return (
    <div className='outer-container'>
      <ToastContainer />
      <div className='inner-container'>
        <div className='input-div'>
         <Copytoclipboard password={password}/>

        <SlctOpcheckboxes passwordLength={passwordLength} setPasswordLength={setPasswordLength}
                          includeLower={includeLower} includeUpper={includeUpper} includeSymbol={includeSymbol} number={number}
                          setIncludeLower={setIncludeLower} setIncludeUpper={setIncludeUpper} setIncludeSymbol={setIncludeSymbol} setNumber={setNumber}/>
        </div>
       <Genaeratepassword passwordLength={passwordLength} setPasswordLength={setPasswordLength}
                          includeLower={includeLower} includeUpper={includeUpper} includeSymbol={includeSymbol} number={number}
                           password={password} setPassword={setPassword}/>
      
      </div>
    </div>
  )
}

export default App
