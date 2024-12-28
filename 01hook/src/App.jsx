import { useState } from "react";


function App() {
  let [count, setCount] = useState(0);
  
  function add(){
    console.log(count)
    if(count >= 20) return;
    setCount(count + 1);
  }
  function minus(){
    console.log(count)
    if(count <= 0) return;
    setCount(count - 1);
  }
 
  return (
    <>
      <h1>Counter</h1>
      <h2>count is: {count}</h2>

      <button onClick={add}>Add value</button>
      <button onClick={minus}>Remove value</button>
    </>
  )
}

export default App
