import React, { useRef } from 'react';
import './Infobar.css';
import { Users } from './Users';

const Infobar = ({username}) => {
    // let nav = props.nav;
    return (
        <div className='info-bar'>
            <img src='https://peterburgremont.ru/images/icons/review/avatars/no-avatar.png' alt='noavatar' className='ava'/>
            <p className="current-name">
                {/* {Users.map((user) => {
                <p>{name}</p>
                 })} */}
                {username}
            </p>
        </div>
    );
};

export default Infobar;