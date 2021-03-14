import "./styles.css";

export default function Bg({ opa }) {
  return (
    <div className="bg-container" style={{ opacity: opa }}>
      <img
        className="background"
        alt="background"
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80"
      />
    </div>
  );
}
