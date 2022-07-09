import React from 'react'
import s from './Greeting.module.css'
import * as events from "events";

type GreetingPropsType = {
   name: string
   setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
   addUser: () => void
   error: string
   totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {
   const inputClass = error ? s.error : s.someClass
   const disabledHandler = error ? true : false

   return (
     <div>
        <input
          value={name}
          onChange={setNameCallback}
          className={inputClass}/>
        <span>{error}</span>
        <button disabled={disabledHandler} onClick={addUser}>add</button>
        <span>{totalUsers}</span>
     </div>
   )
}

export default Greeting
