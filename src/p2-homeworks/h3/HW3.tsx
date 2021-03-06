import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

export type UserType = {
   _id: string
   name: string
}

// уровень работы с глобальными данными
function HW3() {
   const [users, setUsers] = useState<Array<UserType>>([])

   const addUserCallback = (name: string) => {
      let a = {_id: v1(), name: name}

      setUsers([...users, a])
   }

   return (
     <div>
        <hr/>
        homeworks 3

        {/*should work (должно работать)*/}
        <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        
        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativeGreeting/>*/}
        <hr/>
     </div>
   )
}

export default HW3
