import React, {useState} from 'react';
import './Input.css';
import { BiSend } from 'react-icons/bi';
import axios from 'axios';

export const Input = () => {
    const [message,setMessage] = useState('');
    const [value,setValue] = useState([]);
    const [list,setList] = useState([]);

    async function getMessage() {
      
            const urlAPI = 'https://api.chucknorris.io/jokes/random'
        axios
        .request(urlAPI)
        .then((response) => setMessage(response.data.value))
        .catch((error) => console.log(error));
    }
    
    const WhyNot = () => {
        const rowMess = [];
         rowMess.push(
         <div className='text-block-mine'>
            <div className='text-mine'>{value}
            </div>
             <p className='sent-date-mine'>4/12/22, 4:00 PM
             </p>
          </div>
      );
         
       return rowMess;
     }

    return (
        <div className='my-input'>
            <div className='box'>
                <input type="text" 
                className='input' 
                defaultValue='' 
                onChange={e => setValue(e.target.value)} 
                placeholder='Type your message'
                />
                <BiSend class='icon' 
                type='submit' 
                onClick={e => {
                setValue(e.target.value); 
                WhyNot()
                    }}
                />
             </div> 
        
         </div>
    );
};

export default Input;