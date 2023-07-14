import React from 'react'

let arr2 = ["☕","🐕","😄","🙏","👻","🙈"];

let todos = ["day1", "day2", "day3", "day4"];
let emoji = Math.floor(Math.random()*6);
const Sam = () => {
  return (
    <div>
        <h1>{arr2[emoji]}</h1>
        
        {
          emoji === 3 ? <img src="https://images.unsplash.com/photo-1688880495039-9b58ae992edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='mountain'/> : 'Tumse na ho payega'
        
        }

        {
            todos.map((item,index)=>{
                return <li key={index}>my Task is {item} & index is at {index} </li>
            })
        }
    </div>
  )
}

export default Sam