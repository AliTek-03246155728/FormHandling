import { useState } from "react";
function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)} style={{fontSize:"60%"}}>+</button>
      &nbsp;
      <button onClick={() => setCount(count - 1)} style={{fontSize:"60%"}}>-</button>
       &nbsp;
      <button onClick={() => setCount(count = 0)} style={{fontSize:"60%"}}> Reset</button>
    </div>
  );
}

export default Counter;