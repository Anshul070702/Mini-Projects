// Understanding useCallback() hook
import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = () => {};
  return (
    <>
      <h1 className="text-4xl text-center text-white">PassWord Generator</h1>
    </>
  );
}

export default App;
