import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "GuitarLA - Post no encontrado",
    });
  }

  return post;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Post no encontrado",
      descripcion: `Guitarras, venta de guitarras, Post no encontrado`,
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    descripcion: `Guitarras, venta de guitarras, post ${data.data[0].attributes.titulo} `,
  };
}

export default function Post() {
  const post = useLoaderData();
  const { contenido, imagen, titulo, publishedAt } = post.data[0].attributes;
  return (
    <article className="post mt-3">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen Blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}
