import { Link } from "@remix-run/react";
import Logo from "../../public/img/logo.svg";
import Navegacion from "./navegacion";
export default function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}
