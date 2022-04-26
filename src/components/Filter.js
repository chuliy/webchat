import React, {useState} from 'react';
import './Filter.css';
import '../img/no-avatar.png';
import { Users } from './Users';
import Dialog from './Dialog';
import Infobar from './Infobar';
import ChatBar from './ChatBar';


// {myMessage},
const Filter = ({onClick,myMessage}) => {
   
    const [query,setQuery]= useState("");
    

    const changeUser = (e,index) => {
        let x;
        x = e.target.innerHTML
            onClick(x)
    }
    
    return (
        <div className='wall'>
            <img src='https://avatars.githubusercontent.com/u/44437096?v=4' alt='noavatar' className='ava'/>
            <input type="text" placeholder='Search or start new chat' className='search-panel' onChange={e=> setQuery(e.target.value)}/>
            <div className='bar'>
                <p id='chats'>Chats</p>
                <div className='chats' >
                    {Users.filter(user=>user.name.toLowerCase().includes(query)).map((user) =>(
                    
                    <div className='item' onClick={changeUser}>
                         <img src={user.image} alt='noavatar' className='ava'/>
                        <p className='name' >{user.name}</p>
                        <p className='text-content'>{user.mess ? user.mess : myMessage} </p>
                        <p className='date'>Jun 20, 2022</p>
                        <br></br>
                        </div>
                    ))}
                </div>
               
        </div>
        </div>
        
    );
    
};

export default Filter;