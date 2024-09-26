import React from 'react'


function SlctOpcheckboxes(props) {
            

            const options = Array.from({ length: 13 }, (_, i) => i+7);
            return (
                <>
                 <label htmlFor='length'><p>Password length:</p> <select id='length' value={props.passwordLength} onChange={(e)=>props.setPasswordLength(e.target.value)} >
                    <option>Must be greater than 7 and less than 20</option>
                    {options.map((num,index)=>{
                    return(
                    <option value={num} key={index} className='options'>{num}</option>
                )})}
                   </select>{console.log(props.passwordLength)}
                </label>
                <label htmlFor='lowercase'><p>Include Lowercase Letters (a-z):</p><input id='lowercase' type='checkbox' checked={props.includeUpper} onChange={(e)=>props.setIncludeUpper(e.target.checked)} className='sizecheckbox'></input></label>
                <label htmlFor='uppercase'><p>Include Uppercase Letters (A-Z): </p><input id='uppercase' type='checkbox' checked={props.includeLower} onChange={(e)=>props.setIncludeLower(e.target.checked)} className='sizecheckbox'></input></label>
                <label htmlFor='numbers'><p>Include Numbers (0-9):</p><input id='numbers' type='checkbox' checked={props.number} onChange={(e)=>props.setNumber(e.target.checked)} className='sizecheckbox'></input></label>
                <label htmlFor='symbols'><p>Include Symbols (!@#$%^&*): </p><input id='symbols' type='checkbox' checked={props.includeSymbol} onChange={(e)=>props.setIncludeSymbol(e.target.checked)} className='sizecheckbox'></input></label>
                {console.log('upper',props.includeUpper)}
                {console.log('lower',props.includeLower)}
                {console.log('symbol',props.includeSymbol)}
                {console.log('number',props.number)}</>
    )
}

export default SlctOpcheckboxes