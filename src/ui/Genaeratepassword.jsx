import React from 'react'
import { toast } from 'react-toastify'
import { UppercaseLetters,LowercaseLetters,Numbers,SpecialCharacters } from '../NumCharSpch';
function Genaeratepassword(props) {
    console.log(props.password)
    const generatePwd=()=>{
      let passwordlist=""
      if(!props.includeLower && !props.includeUpper && !props.includeSymbol && !props.number){
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
             if(props.includeLower){
               passwordlist=passwordlist+LowercaseLetters
             }
             if(props.includeUpper){
               passwordlist=passwordlist+UppercaseLetters
             }
             if(props.includeSymbol){
               passwordlist=passwordlist+SpecialCharacters
             }
             if(props.number){
               passwordlist=passwordlist+Numbers
             }
             props.setPassword(createPassword(passwordlist))
             console.log(props.password)
           
      }
    }
    const createPassword=(passwordlist)=>{
        if(props.passwordLength==='' || props.passwordLength==='Must be greater than 7 and less than 20'){
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
                 for (let i=0;i<props.passwordLength;i++){
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
  return (
    <button onClick={generatePwd}>Generate password</button>
  )
}

export default Genaeratepassword