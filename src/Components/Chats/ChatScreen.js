import React,{useState} from 'react'
import { Avatar,Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import "./ChatScreen.css"

function ChatScreen() {
    const [messages,setMessages] = useState([
        {
            name:"Sandy",
            image:"https://clubs.ntu.edu.sg/ntucmn/wp-content/uploads/2021/05/Screenshot-2021-05-15-at-3.03.45-PM-1.png",
            message:"where treat?"
        },
        {
            name:"Sandy",
            image:"https://clubs.ntu.edu.sg/ntucmn/wp-content/uploads/2021/05/Screenshot-2021-05-15-at-3.03.45-PM-1.png",
            message:"where treat?"
        },
        {
            name:"Sandy",
            image:"https://clubs.ntu.edu.sg/ntucmn/wp-content/uploads/2021/05/Screenshot-2021-05-15-at-3.03.45-PM-1.png",
            message:"where treat?"
        },        {
            name:"Sandy",
            image:"https://clubs.ntu.edu.sg/ntucmn/wp-content/uploads/2021/05/Screenshot-2021-05-15-at-3.03.45-PM-1.png.",
            message:"where treat?"
        },
        {
            message:"STOP"
        }
    ]);

    const cat = messages[0].name;
    return (
        <div className="chatScreen">
            <p>You matched with {cat} on 10/11/21</p>
            {messages.map((message) => (
                
                message.name ?
                (<div className="chatScreen__message">
                    <Avatar className="chatScreen__img" src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                </div>) :  
                (<div className="chatScreen__message">
                    <p className="chatScreen__reply">{message.message}</p>
                    </div>)
            ))}
            <div > 
                <form className="chatScreen__input">
                    <input className="chatScreen__inputbox" 
                           placeHolder={`Type a message to ${cat}`}
                           type="text"
                    />
                    <Button className="chatScreen__inputbtn" variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
