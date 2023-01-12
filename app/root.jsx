import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { useEffect, useState } from "react";

//* Amigable al Seo - Meta- Ideal
export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width-device-width,initial-scale=1",
  };
}

//* Enlazar Hojas de Estilo, Fonts , Normalize etc.
export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    { rel: "stylesheet", href: styles },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap",
      crossOrigin: "true",
    },
    { rel: "stylesheet", href: styles },
  ];
}

export default function App() {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito") ?? [])
      : null;
  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      //*Iterar sobre el arreglo e identificar el elemento duplicado
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          //*Reescribir la Cantidad
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      //*Añadir al Carrito
      setCarrito(carritoActualizado);
    } else {
      //*Registrar Nuevo, Agregar al Carrito
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
  };
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html land="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        {/* //*Optimiza - Mejor Performance "Scripts" */}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

//* Manejo de Errores

export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <p className="error">
        {error.status}
        {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Regresar a Pagina Principal
      </Link>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">
        {error.status}
        {error.statusText}
      </p>
      <Link className="error-enlance" to="/">
        Regresar a Pagina Principal
      </Link>
    </Document>
  );
}
