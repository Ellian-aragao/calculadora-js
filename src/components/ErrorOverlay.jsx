export default function ErrorOverlay(props) {
  return (
    <span
      style={
        props.errorMsg
          ? {
              display: "flex",
              justifyContent: "center",
              background: "#f8d7da",
              color: "#721c24",
              border: "1px solid #721c24",
              padding: "0.8rem 0",
              marginLeft: "0.8rem",
              marginBottom: "0.8rem",
              borderRadius: "15px",
            }
          : { display: "none" }
      }
    >
      Operação inválida.
    </span>
  );
}
