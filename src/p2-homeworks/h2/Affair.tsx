import React from 'react'
import {AffairPriorityType} from "./HW2";

type AffairPropsType = {
   // key не нужно типизировать
   affair: string // need to fix any
   deleteAffairCallback: (id: number) => void // need to fix any
   priority: string
   id: number
}

function Affair(props: AffairPropsType) {
   const deleteCallback = () => {
      props.deleteAffairCallback(props.id)
   }// need to fix
// name: 'React', priority: 'high'
   return (
     <div>
        <span>{props.affair}</span>
        <span>         </span>
        <span>{props.priority}</span>
        <button onClick={deleteCallback}>X</button>
     </div>
   )
}

export default Affair
