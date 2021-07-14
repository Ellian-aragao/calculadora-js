export default function Button(props) {
  return (
    <input
      style={{
        cursor: "pointer",
        margin: "0.3rem",
        height: "3rem",
        width: "3rem",
        border: "1px solid #aaa",
        borderRadius: "15px",
        fontWeight: "600",
        background: "##f1f3f4",
        ...props.style,
      }}
      type="button"
      value={props.value}
      onClick={props.onClick}
    />
  );
}
