export async function getPosts() {
  const rpta = await fetch(` ${process.env.API_URL}/posts?populate=imagen`);
  const data = await rpta.json();
  return data;
}
export async function getPost(url) {
  const rpta = await fetch(
    ` ${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const data = await rpta.json();
  return data;
}
