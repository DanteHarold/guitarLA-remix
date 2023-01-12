import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";
import { getPosts } from "~/models/posts.server";

export function meta() {
  return {
    title: "GuitarLA - Nuestro Blog",
    description: "GuitarLA, Blog De Musica y venta de Guitarras",
  };
}

export async function loader() {
  const posts = await getPosts();
  console.log(posts);
  return posts?.data;
}

export default function Blog() {
  const posts = useLoaderData();
  return <ListadoPosts posts={posts} />;
}
