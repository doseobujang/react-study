/* Add state to your component.
Functions starting with `use` are called Hooks
You can only call Hooks at the top of your components
You can find other built=in Hooks in the API reference */
import { useState } from 'react'

function MyButton() {
    /* declare a state variable inside your component.
    The convention is [something, setSomethind] */ 

    // count = 0
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

function App() {
  return (
    <>
      <h1>Counters that update separately</h1>
      {/* Each will get its own state */}
      <MyButton />
      <MyButton />
    </>
  );
}

export default App