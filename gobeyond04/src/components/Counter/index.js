import React, { useState } from "react";

//componentes
import Viewer from "../Viewer";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Viewer counter={count} />
    </div>
  );
}

export default Counter;
