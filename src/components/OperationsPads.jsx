import { operations } from "../service/processingArray";
import Button from "./Button";

export default function NumberPads(props) {
  return (
    <div
      style={{
        width: "8rem",
        padding: "0.3rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      {operations.map((key) => (
        <Button style={{background: '#dadce0'}} value={key} onClick={(x) => props.onClick(x.target.value)} />
      ))}
      <Button
        style={{ order: 1, width: "7rem"}}
        value="="
        onClick={props.onClickEqual}
      />
    </div>
  );
}
