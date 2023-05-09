import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Todo from './Todo';
import Counter from './Counter';
import Notapage from './Notapage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Home/>} >
          <Route path="/Todo" element={<Todo/>} />
          <Route path="/Counter" element={<Counter/>} />
          <Route path="*" element={<Notapage/>} />
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router