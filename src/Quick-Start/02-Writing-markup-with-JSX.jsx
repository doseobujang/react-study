/*
JSX is stricter then HTML
tags have to be closed like <br/>
Component can't return multiple JSX tags. Have to wrap then in to a shared parent, like a <div>...<div/> or an empty <>...</> wrapper
*/

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}