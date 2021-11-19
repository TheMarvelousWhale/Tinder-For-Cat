import Chat from './Chat'
import React from 'react'

function Chats() {
    
    return (
        <div className="Chats">
            <Chat
                name="Neki"
                msg="Meow meow"
                time="11 Dec"
                profilePic="https://avatars.githubusercontent.com/u/51878941?v=4"
            />
            <Chat
                name="Xiaohei"
                msg="Purrr"
                time="12 Dec"
                profilePic="https://clubs.ntu.edu.sg/ntucmn/wp-content/uploads/2021/05/Xiaohei-4-1024x576.jpeg"
            />
            <Chat
                name="Sandy"
                msg="Where treats?"
                time="10 mins ago"
                profilePic="https://clubs.ntu.edu.sg/ntucmn/wp-content/uploads/2021/05/Screenshot-2021-05-15-at-3.03.45-PM-1.png"/>
        </div>
    )
}

export default Chats
