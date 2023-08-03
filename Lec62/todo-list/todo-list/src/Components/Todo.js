import React from 'react'
import {BsTrash} from 'react-icons/bs'

const Todo = (props) => {
    function deleteTodoHandler(id){
        props.deleteTodo(id);
    }

  return (
    <div>
        <li>
            <p>Index:{props.index} --&gt; ID: {props.id} --&gt; Task: --&gt; {props.todo} <span onClick={()=>deleteTodoHandler(props.id)}><BsTrash/></span>
            
            

            </p>
        </li>
    </div>
  )
}

export default Todo