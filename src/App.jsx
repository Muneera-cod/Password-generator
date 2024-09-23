import React from 'react'
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { IconClipboardCopy} from '@tabler/icons-react';
import { UppercaseLetters,LowercaseLetters,Numbers,SpecialCharacters } from './NumCharSpch';
function App() {
    const [password,setPassword]=useState("");
    const [passwordLength,setPasswordLength]=useState('');
    const [includeUpper,setIncludeUpper]=useState(false);
    const [includeLower,setIncludeLower]=useState(false);
    const[number,setNumber]=useState(false)
    const [includeSymbol,setIncludeSymbol]=useState(false);
    console.log(password)
   const generatePwd=()=>{
     let passwordlist=""
     if(!includeLower && !includeUpper && !includeSymbol && !number){
            toast.error('Select atleast one checkbox',{
              position: "top-right",
              autoClose:1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,}
            )
   
     }
     else{
            if(includeLower){
              passwordlist=passwordlist+LowercaseLetters
            }
            if(includeUpper){
              passwordlist=passwordlist+UppercaseLetters
            }
            if(includeSymbol){
              passwordlist=passwordlist+SpecialCharacters
            }
            if(number){
              passwordlist=passwordlist+Numbers
            }
            setPassword(createPassword(passwordlist))
            console.log(password)
          
     }
   }
   const createPassword=(passwordlist)=>{
       if(passwordLength==='' || passwordLength==='Must be greater than 7 and less than 20'){
                  toast.error('Select password length',{
                    position: "top-right",
                    autoClose:1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,}
                  )
            }
        else{
          
                let generatedPwd =""
                const passwordlistLength= passwordlist.length
                for (let i=0;i<passwordLength;i++){
                    const randomIndex=Math.round(Math.random() * passwordlistLength)
                    generatedPwd=generatedPwd + passwordlist.charAt(randomIndex)
                }
                toast.success('Generated Password Successfully',{
                  position: "top-right",
                  autoClose:1000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,}
                )
                return generatedPwd
           }
       }
       const copy=(password)=>{
           navigator.clipboard.writeText(password)
       }
  const handlecopy=()=>{
    if(password===''){
      toast.error('No password to copy',{
        position: "top-right",
        autoClose:1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,}
      )
    }
    else{
      copy(password)
      toast.success('Password copied to clipboard',{
        position: "top-right",
        autoClose:1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,}
      )
    }
  }
    
    const options = Array.from({ length: 13 }, (_, i) => i+7);
  return (
    <div className='outer-container'>
      <ToastContainer />
      <div className='inner-container'>
        <div className='input-div'>
        <div className='screen'><p>{password}</p><IconClipboardCopy onClick={handlecopy}/></div>

            <label htmlFor='length'><p>Password length:</p> <select id='length' value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} >
                                       <option>Must be greater than 7 and less than 20</option>
                                       {options.map((num,index)=>{
                                        return(
                                       <option value={num} key={index}>{num}</option>
                                      )})}
                                </select>{console.log(passwordLength)}
           </label>
           <label htmlFor='lowercase'><p>Include Lowercase Letters (a-z):</p><input id='lowercase' type='checkbox' checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)}></input></label>
           <label htmlFor='uppercase'><p>Include Uppercase Letters (A-Z): </p><input id='uppercase' type='checkbox' checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)}></input></label>
           <label htmlFor='numbers'><p>Include Numbers (0-9):</p><input id='numbers' type='checkbox' checked={number} onChange={(e)=>setNumber(e.target.checked)}></input></label>
           <label htmlFor='symbols'><p>Include Symbols (!@#$%^&*): </p><input id='symbols' type='checkbox' checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)}></input></label>
           {console.log('upper',includeUpper)}
           {console.log('lower',includeLower)}
           {console.log('symbol',includeSymbol)}
           {console.log('number',number)}
        </div>
        <button onClick={generatePwd}>Generate password</button>
      
      </div>
    </div>
  )
}

export default App
