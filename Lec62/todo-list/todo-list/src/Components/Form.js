import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Form = (props) => {
    let [input, setInput] = useState();
    function formSubmitHandler(e){
        e.preventDefault(); 
        const newTodo = {
            id: uuid(),
            todo: input
        }
        props.addTodo(newTodo);
        console.log(input)
        setInput("");

    }
    function inputChangeHandler(e){
        setInput(e.target.value);
    }
  
    return (
    <div>
        <form action="" onSubmit={formSubmitHandler}>
            <input onChange={inputChangeHandler} type="text" placeholder='Enter your task' value={input} />
            </form>     
    </div>
  )
}

export default Form