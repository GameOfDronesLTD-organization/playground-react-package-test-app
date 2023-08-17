import Button from "react-bootstrap/Button";
const Playground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "red",
      }}
    >
      <Button variant="primary">Primary</Button>{" "}
    </div>
  );
};

export default Playground;
