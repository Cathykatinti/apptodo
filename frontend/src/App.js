import './app.css';
import {useState,useEffect} from 'react';
import React from 'react'
import ToDo from './components/ToDo'
import{getAllToDo} from './utils/handleApi';

import axios from 'axios';
function App() {
   const [toDo,setToDo] = useState([])

   useEffect(() =>{
    getAllToDo(setToDo)
   },[])
   
   
   
   
   return(
    <>
    
    <div className='app-bar'>
       <h1>TODO APP</h1>
    </div>
    <div className='todo-input'>
      <input className='input' type='text' value="" placeholder='Enter todo'/>
      <button className='btn-add'>Add</button>
    </div>
   {toDo.map((item)=> <ToDo key ={item._id} text ={item.text}
    
   /> )}
    </>
    
    
     
)
   }
 export default App;
