import { useState } from "react";

import { processingArray } from "./service/processingArray";
import ErrorOverlay from "./components/ErrorOverlay";
import Display from "./components/Display";
import HistoryOperations from "./components/HistoryOperations";
import CalculatorButtons from "./components/CalculatorButtons";

export default function App() {
  const [display, setDisplay] = useState([]);
  const [history, setHistory] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);

  const setterDisplay = () => {
    try {
      const response = processingArray(display);
      setHistory([...history, response.operation]);
      setDisplay([response.result]);
      return;
    } catch (e) {
      console.error(e);
    }
    setErrorMsg(true);
    setTimeout(() => setErrorMsg(false), 3000);
    setDisplay([]);
  };

  const eraseItem = () => {
    display.pop();
    setDisplay(display);
  };

  return (
    <section
      style={{
        background: "#f5f5f5",
        width: "40rem",
        borderRadius: "15px",
        padding: "2rem",
        border: "2px solid #aaa",
      }}
    >
      <ErrorOverlay errorMsg={errorMsg} />
      <div style={{ display: "flex" }}>
        <div
          style={{
            margin: "1rem",
            padding: "2rem",
            border: "1px solid #ccc",
            borderRadius: "15px",
          }}
        >
          <Display onClickEraseButton={eraseItem} value={display} />
          <CalculatorButtons
            onClickNumbers={(e) => setDisplay([...display, e])}
            onClickEqual={setterDisplay}
            onClickOperations={(e) => setDisplay([...display, e])}
          />
        </div>
        <HistoryOperations history={history} />
      </div>
    </section>
  );
}
