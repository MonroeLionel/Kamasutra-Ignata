import React from 'react'
import s from './Greeting.module.css'
import * as events from "events";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
   const inputClass = error ? s.errorInput_red : ''
   const disabledHandler = error ? true : false
   console.log(name)
   return (

     <div>
        <SuperInputText
          value={name}
          onChange={setNameCallback}
          error={error}
          className={inputClass}
        />
        <SuperButton
          disabled={disabledHandler}
          onClick={addUser}
        >add</SuperButton>


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
