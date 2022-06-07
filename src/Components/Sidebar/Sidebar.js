import React from 'react';
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { MoreVert } from '@mui/icons-material';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar></Avatar>
                <div className='sidebar__headerRight'>
                    <DonutLargeIcon />
                    <ChatIcon />
                    <MoreVert></MoreVert>
                </div>
            </div>
            <div className='sidebar_search'>

            </div>
            <div className="sidebar_chats">

            </div>
        </div>
    );
};

export default Sidebar;