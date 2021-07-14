import { useEffect, useState } from "react";
import ButtonErase from "./ButtonErase";
export default function Display(props) {
  const [value, setValue] = useState([]);

  const eraseFromDisplay = () => {
    props.onClickEraseButton()
    setValue([...props.value])
  }
  useEffect(() => setValue([...props.value]), [props.value]);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "0 1rem",
        height: "2rem",
        width: "19rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <span style={{ marginRight: "1rem" }}>{value}</span>
      <ButtonErase onClick={eraseFromDisplay} />
    </div>
  );
}
