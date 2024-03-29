import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";

export const PATH = {
   PRE_JUNIOR: '/pre-junior',
   JUNIOR: 'junior',
   JUNIOR_PLUS: 'junior-plus'
   // add paths
}

function Pages() {
   return (
     <div>
        {/*Routes выбирает первый подходящий роут*/}
        <Routes>

           {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
           <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
           <Route path={'/'} element={<Navigate to={PATH.JUNIOR}/>}/>
           <Route path={'/junior-plus'} element={<div>junior-plus</div>}/>

           <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
           <Route path={PATH.JUNIOR} element={<Junior/>}/>
           // add routes
           {/*<Route path={'/*'} element={<div>404</div>}/>*/}

           {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
           <Route path={'/*'} element={<Error404/>}/>

        </Routes>
     </div>
   )
}

export default Pages
