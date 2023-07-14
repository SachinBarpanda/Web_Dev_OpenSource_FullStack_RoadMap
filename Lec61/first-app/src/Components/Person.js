import React, { useState } from 'react'

const Person = (props) => {
  let [namee, setName] = useState(props.name);
  // let namee = props.name;
  function handleClick(){
    // let namee = 'anonymous';
    setName('anonymous');
  }

  return (
    <div>
        <div onClick={handleClick}>I am a div do not click me</div>

        <h1>{namee}</h1>
        <h2>{props.age}</h2>
        <h3>Best web dev mentor</h3>
    </div>
  )
}

export default Person