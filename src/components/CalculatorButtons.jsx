import NumberPads from "./NumberPads";
import OperationsPads from "./OperationsPads";
export default function CalculatorButtons(props) {
  return (
    <div
      style={{
        width: "21rem",
        display: "flex",
      }}
    >
      <NumberPads onClick={(e) => props.onClickNumbers(e)} />
      <OperationsPads
        onClickEqual={props.onClickEqual}
        onClick={(e) => props.onClickOperations(e)}
      />
    </div>
  );
}
