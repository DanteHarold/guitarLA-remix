export async function getCurso() {
  const rpta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  return await rpta.json();
}
