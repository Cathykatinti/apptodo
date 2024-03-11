import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import React from "react"

const ToDo = ({text,updateMode,deleteToDo}) => {
  //console.log(text)

    return ( 
       <>
       <div className="todo-list">
            <ul>
              <li className="list-item">
                <div className="list-row">
                    <input type='checkbox'/>
                    {text}
                    <FaEdit className='icon' onClick={updateMode}/>
                    <MdOutlineDelete className='icon'onClick={deleteToDo}/>
                </div>
              </li>
            </ul>
       </div>
       </>
     );
}
 
export default ToDo;
