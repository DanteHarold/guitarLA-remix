import { Link } from "@remix-run/react";
import React from "react";
import { formatearFecha } from "~/utils/helpers";

export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article className="contenedor post">
      <img
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen Blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}
