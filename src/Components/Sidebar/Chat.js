import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css'
const Chat = () => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    // sendMessage Function
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You ttt', input);
        setInput('')
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__massage ${true && 'chat__recever'}`}>
                    <span className='chat__name'>Sonny Sanga</span>
                    Hey guys
                <span className='chat__timestamp'>3:52pm</span>
                </p>

            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type="text" />
                    <button onClick={sendMessage} type='submit'>Send a Message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
};

export default Chat;