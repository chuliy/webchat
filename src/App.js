import './App.css';
import Filter from './components/Filter';
// import ChatBar from './components/ChatBar';
import Infobar from './components/Infobar';
import Dialog from './components/Dialog';
import Input from './components/Input';
import React, {useState} from 'react';
import { Users } from './components/Users';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
    const [message,setMessage] = useState('')
    const [myMessage,setMyMessage] = useState('')
    const [username,setUsername] = useState('')
    

  const handleMessage = (myMessage) => {
    setMyMessage(myMessage)
  }
  const changeUser = (username) => {
      setUsername(username)
  }
  return (
      <>

      <Router>
        <Infobar username={username}></Infobar>
        <Filter myMessage={myMessage} message={message} onClick={changeUser}></Filter>
        <Dialog onChange={handleMessage} ></Dialog>
       </Router>

      </>
  );
}

export default App;
