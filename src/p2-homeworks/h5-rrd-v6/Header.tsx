import React from 'react'
import {NavLink} from "react-router-dom";
import css from './Header.module.css'


function Header() {
   return (
     <div className={css.homework}>

        <div>React homeworks</div>

        <div className={css.panel}>

           <div className={css.hidden_panel}>

              <NavLink className={css.a} to={'/'}>pre-junior</NavLink>
              <NavLink className={css.a} to={'/junior'}>junior</NavLink>
              <NavLink className={css.a} to={'/junior-plus'}>junior+</NavLink>

           </div>
        </div>
     </div>

   )
}

export default Header
