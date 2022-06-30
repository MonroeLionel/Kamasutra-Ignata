import React from 'react'
import './Message.module.css'

type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataPropsType) {
    return (
         <div className="messageBabl">
            <div className="avatar"><img className="avatar2" src={props.avatar} width={40} alt=""/>
                </div>
           <div className="messag-contaner">
               <div className="name">{props.name}</div>
               <div className="message">{props.message}</div>
               <div className="time">{props.time}</div>
           </div>


        </div>
    )
}

export default Message
