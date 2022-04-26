import React from 'react';
import './ChatBar.css';
import { Users } from './Users';
import Filter from './Filter';

const ChatBar = () => {
    return (
        <div className='bar'>
                {/* <p id='chats'>Chats</p>
                <div className='chats'>
                    {Users.filter(user=>user.name.toLowerCase().includes(Filter(user.name))).map((user) =>(<>
                         <img src={user.image} alt='noavatar' className='ava'/>
                        <p key={user.id}className='name'>{user.name}</p>
                        <p className='text-content'>Hey! How are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='date'>Jun 20, 2022</p>
                        <br></br>
                        </>
                    ))}
                </div> */}
               
        </div>
    );
};

