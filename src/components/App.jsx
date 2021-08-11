import React from "react";

function stacks() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unstacks() {
  document.getElementById("root").style.textDecoration = null;
}
//const stacks = { textDecoration: "line-through" };
function App() {
  //var isDone = true;

  return (
    <div>
      <p> Buy Milk</p>
      <button onClick={stacks}>change To state</button>
      <button onClick={unstacks}>change To Back</button>
    </div>
  );
  //<p style={isDone ? stacks:null}> Buy milk</p>;
}

export default App;
