import React, { useState } from 'react';
import './counter.css';
function Counter() {
    const [ num , setNum]=useState(1);
    
  return (
    <div className='container'>
        <div><h1>Counter</h1> </div>
        <div className='data'>
            <button className='btn-c' onClick={()=>setNum(num+1)}>+</button>
            <span>{num}</span>
            <button className='btn-c' onClick={()=>(num===0)?setNum(0):setNum(num-1)}>-</button>
        </div>
    </div>
  )
}

export default Counter