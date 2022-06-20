import { useRef, useState } from "react";
import "./App.css";

function App() {
  const val = useRef();
  const [count, setCount] = useState(0);
  const [v, setV] = useState(0);

  function handle() {
    setCount((count) => count + 1);
  }

  function handleRef() {
    val.current = val.current + "A";
    console.log("val current", val.current);
  }

  console.log("valcurrent", val.current);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          Count: {count} - Val.current: {val.current} - V: {v}
        </div>
        <div>
          <button type="button" onClick={handle}>
            Count
          </button>
          <button type="button" onClick={handleRef}>
            Ref
          </button>
          <button type="button" onClick={() => {}}>
            Child
          </button>
        </div>
        <Child v={v} />
      </header>
    </div>
  );
}

export default App;

function Child({ v }: { v: number }) {
  return (
    <div>
      <p>Child: {v}</p>
    </div>
  );
}
