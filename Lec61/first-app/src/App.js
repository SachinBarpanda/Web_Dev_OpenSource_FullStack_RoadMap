import React from 'react'
import Person from './Components/Person'
import Sam from './Components/Sam'
import Binary from './Components/Binary';


const App = () => {
  return (
    <div>
      <Person name="samarth" age="27" />
      <Person name="Sachin" age="24" />
      <Person name="Maniket" age="22" />
      <Person name="Abhinav" age="21" />
      {/* <Sam/> */}
      {/* <Binary/> */}
    </div>
  )
}

export default App