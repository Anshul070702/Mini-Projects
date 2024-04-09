import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Product from "./components/Button";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Product name1="previous" name2="next" />
      <Product name1="left" name2="right" />
      <Product />
    </>
  );
}

export default App;
