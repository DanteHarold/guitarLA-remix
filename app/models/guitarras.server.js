export async function getGuitarras() {
  const rpta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const data = await rpta.json();
  return data;
}
export async function getGuitarra(url) {
  const rpta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const data = await rpta.json();
  return data;
}
