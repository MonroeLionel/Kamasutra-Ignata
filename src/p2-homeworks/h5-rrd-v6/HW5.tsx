import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter, NavLink} from "react-router-dom";

function HW5() {
   return (
     <div>
        {/*в gh-pages лучше работает HashRouter*/}
        {/*<HashRouter>*/}
        {/*<NavLink to={'/'}>qw </NavLink>*/}
        <Header/>

        <Pages/>

        {/*</HashRouter>*/}
     </div>
   )
}

export default HW5
