import Button from "./Button";

export default function NumberPads(props) {
  return (
    <div
      style={{
        width: "13rem",
        padding: "0.3rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {Array.from({ length: 10 }, (x, i) => i).map((key) => (
        <Button
          style={
            key === 0
              ? { order: 1, width: "7.3rem", alignSelf: "flex-end" }
              : {}
          }
          value={key}
          onClick={(x) => props.onClick(x.target.value)}
        />
      ))}
      <Button value="00" onClick={(x) => props.onClick(x.target.value)} />
    </div>
  );
}
