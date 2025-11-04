import { useState } from 'react'

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function App() {
    /* Props
    Move the state from the individual buttons "upwards" to the closest component containing all of them
    then can pass both of them down as props to each of the buttons 
    By moving state up, you've shared it between components */
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

// 기본으로 보여줄 객체
export default App
