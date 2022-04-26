
import './Dialog.css';
import './Input.css'
import axios from 'axios';
import { BiSend } from 'react-icons/bi';
import { db } from '../firebase';
import { Users } from './Users';
import React, {useContext, useState,useEffect} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
 

const Dialog = ({onChange},props) => {

    const [message,setMessage] = useState([])
    const [myMessage,setMyMessage] = useState([]);
  
    let myRef = React.createRef();
    let myRefChuck = React.createRef();

    let addMyMessage = (e) => {
        let commentValue = myRef.current.value;
        let comments = [...myMessage,commentValue]; 
        setMyMessage(comments);
        myRef.current.value='';
        // console.log(myMessage,myRef,myRef.current.value);
    }

  //   let addMessage = (e) => {
  //     let messageChuckValue = myRefChuck.current.value;
  //     let messagesChuck = [...message,messageChuckValue]; 
  //     setMessage(messagesChuck);
  //     myRefChuck.current.value='';
  // }
  
 

    const handleMessage = (e) => {
        onChange(e.target.value)
        
    }

    // useEffect(() => {
    //     const listener = event => {
    //       if (event.code === "Enter") {
    //         addMyMessage({myMessage})
    //       }
    //     };
    //     document.addEventListener("keydown", listener);
    //     return () => {
    //       document.removeEventListener("keydown", listener);
    //     };
    //   }, []);

    let getChuck = () => {
        const urlAPI = `https://api.chucknorris.io/jokes/random`
        axios
       .request(urlAPI)
       .then((response) => {setTimeout(() => {setMessage(response.data.value)},1000)})
       .catch((error) => console.log(error))
       
      }
        
     
     let funcs = () => {
         addMyMessage();
        //  addMessage();
         getChuck();
         localStorage.setItem('mes',message)
     }
     let showMyMessage = myMessage.map((item,index)=>   
      <>
          <div className='text-block-mine'>
          <div className='text-mine'>{item}
          </div>
          <p className='sent-date-mine'>{formatDate(new Date())}
          </p>
          </div>    
             <div className='text-block'>
            <img src='https://peterburgremont.ru/images/icons/review/avatars/no-avatar.png' alt='noavatar' className='ava'/>
            <div className='text'>{message}</div>
    <p className='sent-date'>4/12/22, 4:00 PM</p>
                </div>      
      </>          
    )

    
   

          function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date) {
        return (
          [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
          ].join('-') +
          ' ' +
          [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
          ].join(':')
        );
      }
  

    return (
        <>
        <div className='chat'>
       
            {showMyMessage}
            
           
        </div>

            <div className='my-input'>
                <div className='box'>
                    <input type="text" 
                    className='input' 
                    ref={myRef}
                    placeholder='Type your message'
                    onChange={handleMessage}
                    ></input>
                    <BiSend class='icon' 
                    type='submit' 
                    onClick={funcs}
                    />
                   
                </div> 
                <p></p>
            </div>
        
          
    </>
    
    );
};


export default Dialog;

