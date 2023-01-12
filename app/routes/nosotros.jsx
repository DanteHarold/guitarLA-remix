import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";
import { useOutletContext } from "@remix-run/react";
//* Reescribe
export function meta() {
  return { title: "GuitarLA-Nosotros", descripton: "Venta de Guitarras" };
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}
export default function Nosotros() {
  const data = useOutletContext();
  console.log(data);
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen de Nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ea
            delectus possimus! Debitis ut facere iusto a aut dolorem nobis
            obcaecati quisquam, doloribus itaque praesentium neque vel fuga
            distinctio. Enim?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum non
            nesciunt obcaecati officiis aut ipsum. Recusandae corporis adipisci
            vel atque saepe voluptatibus omnis molestiae expedita natus, animi
            hic quisquam error?
          </p>
        </div>
      </div>
    </main>
  );
}
