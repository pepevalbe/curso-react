import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>      
      <h1>React demo App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">Información</Link> |{" "}
        <Link to="/form">Formulario</Link> |{" "}
        <Link to="/table">Tabla</Link>
      </nav>
      <Outlet />
    </div>
  );
}
