import React from 'react'
import { toast } from 'react-toastify'
import { IconClipboardCopy} from '@tabler/icons-react';
function Copytoclipboard(props) {
    let password=props.password
    const copy=(password)=>{
        navigator.clipboard.writeText(password)
    }
    const handlecopy=()=>{
        if(password==='')
            {
                toast.error('No password to copy',{
                position: "top-right",
                autoClose:1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,}
                )
           }
        else
        {
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
  return (
    <div className='screen'><p>{props.password}</p><IconClipboardCopy onClick={handlecopy}/></div>
  )
}

export default Copytoclipboard