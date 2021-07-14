import { useEffect, useState } from "react";

export default function HistoryOperations(props) {
  const [history, setHistory] = useState([]);
  useEffect(() => setHistory([...props.history]), [props.history]);
  return (
    <div
      style={{ marginLeft: "2rem", display: "flex", flexDirection: "column" }}
    >
      <h2>History</h2>
      {history.map((item, i) => (
        <div style={{ marginBottom: "0.3rem" }}>
          {i + 1}. {item}
        </div>
      ))}
    </div>
  );
}
