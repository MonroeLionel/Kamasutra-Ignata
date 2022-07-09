import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
   users: Array<UserType>
   addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
   const [name, setName] = useState<string>('')
   const [error, setError] = useState<string>('')


   const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value.trim())
      let a = e.currentTarget.value.trim()
      if (a) {
         setError(``)
      } else setError(`name is require`)

   }


   const addUser = () => {
      if (name) {
         alert(`Hello  !` + ` ` + name)
         addUserCallback(name)
         setName(``)

      } else {
         setError(`name is require`)

      }

   }

   const totalUsers = users.length

   return (
     <Greeting
       name={name}
       setNameCallback={setNameCallback}
       addUser={addUser}
       error={error}
       totalUsers={totalUsers}
     />
   )
}
export default GreetingContainer
