import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css'

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('');


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    //createChat Function 
    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");
        if (roomName) {
            // do some claver database Stuff....
        }
    };
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChat__info'>
                <h2>Room Name</h2>
                <p>Last massage...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    );
};

export default SidebarChat;