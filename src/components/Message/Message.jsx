import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Paper, TextField, Button } from '@material-ui/core';

const Message = ({ currentUserId, receiverId, jobPostId }) => {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');

useEffect(() => {
const socket = io();
socket.on('receive message', data => {
setMessages([...messages, data]);
});

return () => {
socket.disconnect();
};
}, [messages]);

const handleSend = () => {
// Send message to server
socket.emit('send message', { sender: currentUserId, receiver: receiverId, job_post_id: jobPostId, message: input });
setInput('');
};

return (
<Paper style={{ padding: '16px' }}>
<TextField value={input} onChange={e => setInput(e.target.value)} label="Message" fullWidth />
<Button onClick={handleSend} variant="contained" color="primary">Send</Button>
{messages.map(message => (

<div key={message.id}>
<h3>From: {message.sender}</h3>
<h3>To: {message.receiver}</h3>
<p>{message.message}</p>
</div>
))}
</Paper>
);
};
export default Message;