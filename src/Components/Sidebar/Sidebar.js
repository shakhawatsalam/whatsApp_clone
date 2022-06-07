import React from 'react';
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { MoreVert, SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar></Avatar>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>


                </div>
            </div>
            <div className='sidebar_search'>
                <div className="sidebar__searchContainer">
                    <SearchOutlined></SearchOutlined>
                    <input placeholder='Search or start new chat' type="text"></input>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
            </div>
        </div>
    );
};

export default Sidebar;