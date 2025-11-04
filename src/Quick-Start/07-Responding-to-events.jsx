/* 
You don't have to call the event handler function.
Just declare event handler functions inside your components.
*/

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}