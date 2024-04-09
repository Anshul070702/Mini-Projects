// Hooks => Methods that updates all the value of any variable in UI
import { useState } from "react"; // importing Hook
function App() {
  //let counter = 15;
  /* Using hook */
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Hooks</h1>
      <p>Understanding how changes are propagated</p>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add1</button>
      <br />
      <button onClick={removeValue}>Sub1</button>
    </>
  );
}
export default App;
