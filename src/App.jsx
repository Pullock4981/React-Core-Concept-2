import "./App.css";
import Counter from "./Counter";
import Player from "./Player";

function App() {
  function handleClick1() {
    alert("Clicked first btn");
  }

  const handleClick2 = () => {
    alert("Btn-2 clicked");
  };

  const handleClick3 = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>React core concept-2</h2>
      <Counter></Counter>
      <Player></Player>
      <div className="btn-click">
        <button onClick={handleClick1}>First click</button>
        <button onClick={handleClick2}>Click 2</button>
        <button onClick={() => handleClick3(3)}>Click 3</button>
      </div>
    </>
  );
}

export default App;
